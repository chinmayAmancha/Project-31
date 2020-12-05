class Plinko {
    constructor(x,y,r) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,10,options);
        this.r = 10;
        this.h = 20;
        
        World.add(world, this.body)
    }
}