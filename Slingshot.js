class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 280,80,40,140);
        image(this.sling2, 253,70,40,100);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            if(pointA.x < 250)
            {
                strokeWeight(8);
                stroke(color(75, 37, 16));
                line(pointA.x -15, pointA.y , pointB.x -30, pointB.y +1);
                line(pointA.x +20, pointA.y , pointB.x +27, pointB.y +1);
    
                image(this.sling3, pointA.x -30, pointA.y -10, 20,30)  
            }
            else
            {
                strokeWeight(4);
                stroke(color(75, 37, 16));
                line(pointA.x -15, pointA.y , pointB.x -30, pointB.y +1);
                line(pointA.x +20, pointA.y , pointB.x +27, pointB.y +1);
    
                image(this.sling3, pointA.x +10, pointA.y -10, 10,20)  
   }       
  }
 } 
}