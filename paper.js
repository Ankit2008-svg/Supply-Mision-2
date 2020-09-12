class Paper {
    constructor(x, y, radius,angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,radius,angle,options);
      this.radius = radius;
            
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      circleMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      circle(0, 0, this.radius);
      pop();
    }
  }
     