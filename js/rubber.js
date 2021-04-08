class Rubber{
constructor(body,anchor){
var options=  {
    bodyA :body,
    pointB :anchor,
    stiffness:0.004,
    length:5
}
this.pointB = anchor;
this.bodyA = body;
this.launcher = Constraint.create(options);
World.add(world, this.launcher);
}
fly(){
    this.launcher.bodyA = null;
}
display(){
    if(this.launcher.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}         
}
