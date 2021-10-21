class polygon
{
	constructor(x, y, Width, Height)
	{
		var options=
        {
            frictionAir :0.005,
            density:1,
		}

		this.Height = Height;
		this.Width = Width;
		this.body = Bodies.rectangle(x, y, Width, Height, options);
		World.add(world, this.body);
	}

	display()
	{
		var Angle = this.body.angle;
		var Pos=this.body.position;	
		push()
		translate(Pos.x, Pos.y);
		rotate(Angle)
		ellipseMode(CENTER);
		ellipse(0, 0, this.Width, this.Height)
		pop()
 	}
}