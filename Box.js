class Box{
    constructor(x,y,width,height){
       var options={
         
           'restitution':0.1,
            'friction':1.0,
            'density':0.2
       }
       this.width=width
       this.height=height
       this.body=Matter.Bodies.rectangle(x,y,width,height,options)
       World.add(world,this.body)
       this.Visiblity = 255;
    }
    display(){
        if(this.body.speed < 3){
        var angle = this.body.angle;
        var pos=this.body.position
        push ()
        rotate(angle);
        rectMode(CENTER)
        fill ("lightgreen")
        rect(pos.x,pos.y,this.width,this.height)
        pop()
           }
           else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
                   
         pop();
          }
  
    }
}