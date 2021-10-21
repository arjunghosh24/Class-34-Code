class Block 
{
  constructor(x, y, width, height) 
  {
      var options = 
      {
          density: 0.001,
          friction: 1,
          restitution: 0.8
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  }

  display() 
  {
    var angle = this.body.angle;
    
    push();
    rectMode(CENTER);
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);

    strokeWeight(4);
    stroke("green");
    fill("cyan");
    rect(0, 0, this.width, this.height);
    pop();
  }
}
