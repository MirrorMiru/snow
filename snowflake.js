class snow{
    constructor(x,y){
    var options = {restitution : 0.4}
    this.body = Bodies.circle(x,y,50,options)
    this.radius = 50
    this.image = loadImage("snow4.jpg")
    this.image.scale =6
   // this.color = color(random(0,255), random(0,255), random(0,255))
    World.add(world, this.body)
    }
    display(){
    
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    //fill(this.color)
    imageMode(RADIUS)
    image(this.image, 0, 0, this.radius, this.radius)
    pop()
    }
    
    
    
    }