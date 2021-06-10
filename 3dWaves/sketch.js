//box class
let myBox = class {
  constructor(xLenght, yLenght, zLenght) {
    this.xLenght = xLenght
    this.yLenght = yLenght
    this.zLenght = zLenght
  }
  draw(xIndex, yIndex, count) {
    //translate position
    let distance = dist(midPoint[0], midPoint[1], xIndex, yIndex)
    box(this.xLenght, this.yLenght, this.zLenght * sin(count / 50 + distance / 2))
  }
}

//number of rows and columns
let rows =11 
let cols =7 
let midPoint = [Math.floor(rows / 2), Math.floor(cols / 2)]
console.log(midPoint)


//dimension of single box
let xLenght = 20
let yLenght = 20
let zLenght = 100

//inizialise 2d array 
let boxArray = Array(rows).fill(Array(cols).fill(new myBox(xLenght, yLenght, zLenght)))

function setup() {
  createCanvas(600, 600, WEBGL)
}

function draw() {
  //light rotating somewhere
  pointLight(200,200,200,100*sin(frameCount/60),100*sin(frameCount/60),100)
  noStroke()

  background(0)
  orbitControl()

  //draw every box
  boxArray.forEach((xValue, xIndex) => {
    translate(-xLenght * cols, yLenght)
    xValue.forEach((yValue, yIndex) => {
      translate(xLenght, 0)
      yValue.draw(xIndex, yIndex, frameCount)
    })
  })
}
