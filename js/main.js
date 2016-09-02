/**
 * Created by Lenovo on 2016/8/31.
 */
var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var ane;

var fruit;

var mom;
var baby;

//鼠标初始位置
var mx;
var my;

var bgPic=new Image();

document.body.onload=game;

function game(){
    init();
    lastTime=Date.now;
    deltaTime=0;
    gameloop();
}

function init(){
    //获得canvas context
    can1=document.getElementById("canvas1");//fishes,dusts,scores,ui
    ctx1=can1.getContext("2d");
    can2=document.getElementById("canvas2");//background,ane,fruit
    ctx2=can2.getContext("2d");

    can1.addEventListener('mousemove',onMouseMove,false);

    bgPic.src ="./src/background.jpg";
    canWidth=can1.width;
    canHeight=can1.height;

    ane=new aneObj();
    ane.init();

    fruit=new fruitObj();
    fruit.init();

    mom=new momObj();
    mom.init();

    baby=new babyObj();
    baby.init();



    mx=canWidth*0.5;
    my=canHeight*0.5;

}

function gameloop(){
    window.requestAnimationFrame(gameloop);//setinterval,settimeou(),fps;
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    //ctx2.clearRect(0,0,canWidth,canHeight);
    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();
    momFruitsCollision();
    baby.draw();
}

function onMouseMove(e){
    if(e.offsetX|| e.layerX){
        mx= e.offsetX==undefined? e.layerX: e.offsetX;
        my= e.offsetY==undefined? e.layerY: e.offsetY;
    }
}

