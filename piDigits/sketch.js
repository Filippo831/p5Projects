//box class
let box = class {
  constructor(dimension) {
    this.dimension = dimension
  };
  draw(xPosition) {
    translate(0, -this.dimension)
    rect(xPosition, 300, this.dimension, this.dimension)
    fill(255)
  }
}

function structure() {
  background(0)
  strokeWeight(3)
  stroke(255)
  line(50, 300, 350, 300)
  strokeWeight(3)
  stroke(255)
  line(50, 200, 50, 300)
}

//variables
let box1 = new box(30)
let box2 = new box(30)

xPosition1 = 200
xPosition2 = 100

let speed1 = 1
let speed2 = 0

let weight1 = 10000
let weight2 = 1

let counter = 0


//MAIN CODE

function setup() {
  createCanvas(400, 400)
  textSize(20)
}


function draw() {
  structure()

  xPosition1 = xPosition1 - speed1
  xPosition2 = xPosition2 - speed2

  if (xPosition2 <= 50) {
    counter++
    speed2 = -speed2
  }

  if (xPosition1 <= xPosition2+30) {
    temp1 = speed1
    temp2 = speed2
    speed1 = (((weight1 - weight2) / (weight1 + weight2)) * temp1) + (((2 * weight2) / (weight1 + weight2)) * temp2)
    speed2 = (((weight2 - weight1) / (weight1 + weight2)) * temp2) + (((2 * weight1) / (weight1 + weight2)) * temp1)
    counter++
  }


  box1.draw(xPosition1)
  box2.draw(xPosition2)

  text(counter, 100, 100)
}
