class player{
    constructor(x, y, s, r){
        var options = {
            restitution:0.9,
            density:1.2
        }
        this.body = Bodies.polygon(x, y, s, r, options);
        this.sides = s;
        this.radius = r;
        this.image = loadImage("sprites/polygon.png")
        World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.sides, this.radius);
    pop();

   
}
}