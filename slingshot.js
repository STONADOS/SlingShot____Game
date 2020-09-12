class SlingShot{
    constructor(body1, point2){
    var options = {
        bodyA:body1,
        pointB:point2,
        stiffness:0.06,
        length:10
    }
    this.point2 = point2;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
}
fly(){
    this.sling.bodyA = null
}
attach(body){
    this.sling.bodyA = body
}

display(){
    if (this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var point2 = this.point2;
    line(pointA.x, pointA.y, point2.x, point2.y);
    line(pointA.x, pointA.y, point2.x, point2.y);
    
}
}
}