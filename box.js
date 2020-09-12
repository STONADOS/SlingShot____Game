class boxes{
    constructor(x, y){
        var options = {
            density:1.2,
            friction:1.7
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.Visiblity = 255;
        this.image = loadImage("sprites/Untitled.png")
        World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    if (this.body.speed < 10){
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
      else{
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle)
        this.Visiblity -=100;
        tint(255, this.Visiblity);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        World.remove(world, this.body);     
    }
        
    }
score() {
    if(this.Visiblity > -55 && this.Visiblity < 0){
        score += 50;
    }
}
}
     