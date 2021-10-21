class Ground
{

    constructor(x, y, Width, Height)
    {
        var ground_options =
        {
            isStatic: true
        }
        
          this.ground = Bodies.rectangle(x, y, Width, Height, ground_options);
          this.width = Width;
          this.height = Height;
          World.add(world, this.ground);
    }

    display()
    {
        noStroke();
        fill("brown");
        rectMode(CENTER);
        rect(this.ground.position.x, this.ground.position.y, this.width, this.Height);
    }
}