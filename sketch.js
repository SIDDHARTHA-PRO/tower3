
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var base1,base2
var box1,box2,box3,box4,box5,box6,box7,
box8,box9,box10,box11,box12,box13,box14,box15,box16
var poly
var string
var backgroundImg
function preload()
{
    getBackgroundImg();
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
    world = engine.world;
	base1= new Base(width/2,500,300,10)
	base2= new Base(800,300,300,10)
	// level 1
	box1= new Box(450,475,30,40)
	box2= new Box(480,475,30,40)
	box3= new Box(510,475,30,40)
	box4= new Box(540,475,30,40)
    //level 2
	box5= new Box(465,435,30,40)
	box6= new Box(495,435,30,40)
	box7= new Box(525,435,30,40)
	  //level1
    box8= new Box(480,395,30,40)
    box9= new Box(510,395,30,40)
//level0
    box10= new Box(495,355,30,40)
//nlevel1
    box11= new Box(770,275,30,40)
    box12= new Box(800,275,30,40)
    box13= new Box(830,275,30,40)
    box14= new Box(800,235,30,40)
    box15= new Box(800,195,30,40)
    box16= new Box(800,155,30,40)
    poly=new ball(180,200,25,25)
    string= new Launcher(poly.body,{x:180,y:200})
    
   

	Engine.run(engine);

}


function draw() {
  if(backgroundImg)
  background(backgroundImg);
  
  Engine.update(engine);
  rectMode(CENTER);
  base1.display();
  base2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  string.display();
  poly.display();

  

    drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}
function mouseReleased()
{
	string.fly();
}
function keyPressed(){
    if(keyCode===32){
        string.attach(poly.body)
        Matter.Body.setPosition(poly.body, {x: 180 , y: 200});
    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1800){
        bg = "day.jpeg";
    }
    else{
        bg = "night.jpeg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}