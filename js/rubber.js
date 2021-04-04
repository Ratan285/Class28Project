class Rubber{
constructor(bodyA,pointB){
var options=  {
    bodyA :bodyA,
    pointB :pointB,
    stiffness:0.003,
    length:10
}
this.pointB = pointB;
this.body = Constraint.create(options);
World.add(world, this.body);
}
fly(){
    this.body.bodyA = null;
}
display(){
    if(this.body.bodyA){
        var pointA = this.body.bodyA.position;
        var pointB = pointB
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}         
}