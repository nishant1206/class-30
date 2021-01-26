const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg, platform;
var bird, slingShot;
var game_state = "init";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(0, height, windowWidth * 2, 20);
    platform = new Ground(150, 605, 300, 170);

    box1 = new Box(700, 620, 70, 70);
    box2 = new Box(920, 620, 70, 70);
    pig1 = new Pig(810, 650);
    log1 = new Log(810, 560, 300, PI / 2);

    box3 = new Box(700, 540, 70, 70);
    box4 = new Box(920, 540, 70, 70);
    pig3 = new Pig(810, 520);

    log3 = new Log(810, 480, 300, PI / 2);

    box5 = new Box(810, 460, 70, 70);
    log4 = new Log(760, 420, 150, PI / 7);
    log5 = new Log(870, 420, 150, -PI / 7);

    bird = new Bird(200, 370);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body, { x: 200, y: 360 });
}

function draw() {
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();
    // console.log("WindowWidth-->" + window.innerWidth + " windowHeight-->" + window.innerHeight);1366 657
}

function mouseDragged() {
    if (game_state != "fly") {
        Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
    }
}


function mouseReleased() {
    slingshot.fly();
    game_state = "fly";
}

function keyPressed() {
    if (keyCode == 32) {
        Matter.Body.setPosition(bird.body, { x: 300, y: 100 });
        slingshot.attach(bird.body);
        Matter.Body.setAngle(bird.body, PI / 2);
        game_state = "init";
    }
}