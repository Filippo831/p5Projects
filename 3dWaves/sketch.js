let boxClass = class {
  constructor(width, lenght, height) {
    this.width = width
    this.lenght = lenght
    this.height = height
  }
  draw(value, xIndex, yIndex) {
    //translate(this.width * xIndex + 0.2, this.lenght * yIndex + 0.2)
    translate(1 * xIndex, 1 * yIndex )
    box(this.width, this.lenght)
    //box(5)
  }
}

let boxMatrix = []

let yQuantity =2 
let xQuantity =2 

let totWidth = 400
let totLenght = 400
let height = 100

for (var xValue = 0, len = xQuantity; xValue < len; xValue++) {
  boxMatrix.push([])
  for (var yValue = 0, len = yQuantity; yValue < len; yValue++) {
    //boxMatrix.push(new boxClass(totWidth / xQuantity, totLenght / yQuantity, height))
    boxMatrix[xValue].push(new boxClass(2, 2, 20))
  }
}

function setup() {
  createCanvas(600, 600, WEBGL)
  normalMaterial()
}

function draw() {
  background(200)
  orbitControl(2,2,2)
  boxMatrix.forEach((x, xIndex) => {
    x.forEach((y, yIndex) => {
      y.draw(10, xIndex, yIndex)
    })
  })
}
