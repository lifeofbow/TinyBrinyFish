/**
 * Created by Lenovo on 2016/9/1.
 */
//判断大鱼和果实的距离
function momFruitsCollision(){
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            //calculate
            var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if(l<400&&fruit.l[i]>13){
                fruit.dead(i);
            }
        }
    }
}
