class Rubber{
constructor(bodyA,bodyB){
var options=  {
    bodyA :bodyA,
    bodyB :bodyB,
    stiffness:0.003,
    length:10
}
this.body = Constraint.create(options);
World.add(world, this.body);
}
display(){
var pointA = this.body.bodyA.position;
var pointB = this.body.bodyB.position;
strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y);
}         
}