class Mango{
  constructor(x,y){
    var options = {
      isStatic:true,
      restitution:0,
      friction:1,
    }
    this.body = Bodies.circle(x,y,40,options);
        this.image = loadImage("mango.png");
        World.add(world,this.image);
  }
display(){
var pos = this.body.position;

push();
translate(pos.x,pos.y);
imageMode(CENTER);
image(this.image,0,0,40,40);
pop();
}
}