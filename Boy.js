class Boy{
constructor(){
  var option ={isStatic : true}
  this.body = Bodies.rectangle(200,430,200,200,option);
  this.image  = loadImage("boy.png");
  Matter.Body.scale(this.body,200,200);
  World.add(world,this.image);
}
display(){

  var pos = this.body.position;
imageMode(CENTER);
image(this.image,pos.x,pos.y,200,200);



}
}