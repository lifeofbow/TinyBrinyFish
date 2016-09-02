/**
 * Created by Lenovo on 2016/9/1.
 */
var babyObj=function(){
    this.x;
    this.y;
    this.angle;
    this.babyEye=new Image();
    this.babyBody=new Image();
    this.babyTail=[];
    this.babyEye=[];

    this.babyTailTimer=0;
    this.babyTailCount=0;

    this.babyEyeTimer=0;
    this.babyEyeCount=0;
    this.babyEyeInterver=1000;
}

babyObj.prototype.init=function(){
    this.x=canWidth*0.5-50;
    this.y=canHeight*0.5+50;
    this.angle=0;
    this.babyEye.src="./src/babyEye0.png";
    this.babyBody.src="./src/babyFade0.png";
    for(var i=0;i<8;i++){
        this.babyTail[i]=new Image();
        this.babyTail[i].src="./src/babyTail"+i+".png";
    }

    for(var i=0;i<2;i++){
        this.babyEye[i]=new Image();
        this.babyEye[i].src="./src/babyEye"+i+".png";
    }
}

babyObj.prototype.draw=function(){
    //lerp x,y
    this.x=lerpDistance(mom.x,this.x,0.98);
    this.y=lerpDistance(mom.y,this.y,0.98);

    //delta angle
    //Math.atan(y,x)
    var deltaY=mom.y-this.y;
    var deltaX=mom.x-this.x;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;

    //lerp angle
    this.angle=lerpAngle(beta,this.angle,0.6);

    //baby tail count
    this.babyTailTimer+=((isNaN(deltaTime)?17:deltaTime)%30);
    if(this.babyTailTimer>50){
        this.babyTailCount=(this.babyTailCount+1)%8;
        this.babyTailTimer=0;
    }
    //baby eye
    this.babyEyeTimer+=((isNaN(deltaTime)?17:deltaTime)%30);
    if(this.babyEyeTimer>this.babyEyeInterver){
        this.babyEyeCount=(this.babyEyeCount+1)%2;
        this.babyEyeTimer=0;

        if(this.babyEyeCount==0){
            this.babyEyeInterver=Math.random()*1500+2000;
        }
        else{
            this.babyEyeInterver=200;
        }
    }

    //ctx1
    ctx1.save();
    //translate()
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);

    ctx1.drawImage(this.babyTail[this.babyTailCount],-this.babyTail[this.babyTailCount].width*0.5+23,-this.babyTail[this.babyTailCount].height*0.5);
    ctx1.drawImage(this.babyBody,-this.babyBody.width*0.5,-this.babyBody.height*0.5);
    ctx1.drawImage(this.babyEye[this.babyEyeCount],-this.babyEye[this.babyEyeCount].width*0.5,-this.babyEye[this.babyEyeCount].height*0.5);
    ctx1.restore();
}
