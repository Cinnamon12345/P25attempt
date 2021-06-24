class Paper
{
	constructor(x,y)
	{
		var options={
            isStatic = false,
            restitution:0.3,friction:0,
            density:1.2
        }
		
		
		this.image=loadImage("paper.png");
		this.body = Bodies.rectangle(x,y,50,50);
		World.add(world, this.body);
		Matter.Body.applyForce();

	}
	display()
	{
			

			push()
			translate(posLeft.x, posLeft.y);
			rotate(this.angle);
			imageMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			image(this.image,0,0,50,50);
			pop()

			
	}

}