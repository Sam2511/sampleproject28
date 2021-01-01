class boy {
    constructor(x,y,width,height){
    
    var options = {isStatic: true, restitution:0.1, friction:1, density: 1.2};
    this.body = Bodies.rectangle(x,y,width,height,options); 
    this.width = width;
    this.height = height;


    

    World.add(world, this.body);
    this.image = loadImage("Pluck/boy.png");
    
    }

    display(){
    imageMode(CENTRE);
    image(this.image,this.body.position.x ,this.body.position.y, this.width, this.height);



    }

    }