class Rubber{
constructor(x,y,width,height,radius){
var options={
'restitution':0.3,
'friction':5,
'density':1
}
this.body=Bodies.circle(x,y,width,height,radius,options);
this.radius=4.9;
this.height=height;
this.width=width;
World.add(world,this.body);

}
display(){

var pos=this.body.position
push()
translate(pos.x,pos.y);
strokeWeight(5);
stroke('black');
fill(40);
pop();

}

}