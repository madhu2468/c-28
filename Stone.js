class Stone {
  constructor(){
    var option = {isStatic : false,
                  restitution:0,
                  friction:1,
                  density:1.2
    }
this.body = Bodies.rectangle(140,200,40,40,option);
this.image = loadImage("stone.png");
Matter.Body.scale(this.body,40,40);
World.add(world,this.body);
  }

display(){

  var pos = this.body.position;
  var angle = this.body.angle;

  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image,0,0,40,40);
  pop();
}
}