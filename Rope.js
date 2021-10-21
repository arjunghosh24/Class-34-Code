class Rope
{
	constructor(BodyA, PointB)
	{		
		var options =
        { 
            bodyA: BodyA,			 
			pointB: PointB, 
			stiffness:0.02, 
		}
		
		this.pointB = PointB;
		this.launcher = Constraint.create(options)
		World.add(world,this.launcher)
	}

	display()
	{
		var pointA = this.launcher.bodyA.position;
		var pointB = this.pointB;
		
		push()
		stroke(48,22,8);
		strokeWeight(2);		
		line(pointA.x,pointA.y,pointB.x,pointB.y);
		pop();	
	}
}