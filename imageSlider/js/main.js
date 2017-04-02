/**
 * Created by Xieyu on 2017/4/2.
 */

//使用自执行函数隔离作用域
var Slider=(function () {
    //记录left的值
    var moveLeft=0;
    // 初始化,绑定轮播事件和点击事件
    function init(){
        var content=document.getElementById('content');
        var button1=document.getElementById('moveLeft');
        //此处为自动轮播
        setInterval(animate,5000,content,20);
        //此处为绑定按钮进行点击切换轮播
        button1.addEventListener('click',function (e) {
            setTimeout(animate,100,content,20);
        });
    }
    //通过定时器实现轮播的动画效果
    function animate(content,speed) {
        if(moveLeft===0){
            var timer1=setInterval(function () {
                moveLeft-=speed;
                if(moveLeft>-560) {
                    content.style.left=moveLeft+'px';
                }
                else if(Math.abs(moveLeft+560)<speed){
                    content.style.left=-560+'px';
                    clearInterval(timer1);
                }else{
                    clearInterval(timer1);
                }
            },10);
        }else if(moveLeft===-560){
            var timer2=setInterval(function () {
                if(moveLeft>-1120) {
                    moveLeft -= speed;
                    content.style.left=moveLeft+'px';
                }
                else if(Math.abs(moveLeft+1120)<speed){
                    content.style.left=-1120+'px';
                    clearInterval(timer2);
                }else{
                    clearInterval(timer2);
                }
            },10);
        }else if(moveLeft===-1120){
            var timer3=setInterval(function () {
                if(moveLeft<0){
                    moveLeft+=2*speed;
                    content.style.left=moveLeft+'px';
                }
                else if(Math.abs(moveLeft)<2*speed){
                    content.style.left=0+'px';
                    clearInterval(timer3);
                }else{
                    clearInterval(timer3);
                }
            },10);
        }
    }
    return{
        init:init,
        animate:animate
    }
})();

Slider.init();