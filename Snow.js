class Snow{
    constructor(x,y){
        var options = {
            friction : 0.2,
            density : 2,
            restitution : 0.5
        }
    this.body = Bodies.circle(x,y,40,options);
    this.image = loadImage("snow5.webp");
    World.add(world, this.body);
    }

    changePosition(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x : random(0,1000),y : random(0,600)});
        }
    }

    display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,40,40);
    
    }

}