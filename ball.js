class Ball{
    constuctor(x,y,radius){
var options = {
    isStatic: true
}
    
this.body = Bodies.circle(x,y,radius);
World.add(world, this.body);
this.radius = 20;
    }

display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    fill("brown");
    ellipse(pos.x, pos.y,20,20 );
    if(this.body.speed < 3){
        super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
      }
    
      score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }
      }
  }
    
}