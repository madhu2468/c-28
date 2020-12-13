class Tree{
  constructor(){
    var option = {isStatic : true,
                  restitution:0,
                  friction:1,
                  density:1.2
    }
this.body = Bodies.rectangle(690,340,200,300,option);
this.image = loadImage("tree.png");
Matter.Body.scale(this.body,200,300);

  }

display(){

  var pos = this.body.position;

  imageMode(CENTER);
  image(this.image,pos.x,pos.y,200,300);
}
}