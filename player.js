class Player {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,

      }
      this.body = Bodies.circle(x,y,25,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    fly(){
        Matter.Body.applyForce(this.body,this.body.position,{x:85,y:-100})
      }
    display(){


      fill(255,0,0)
      circle(this.body.position.x, this.body.position.y, this.radius, this.radius);
    

    }
  };