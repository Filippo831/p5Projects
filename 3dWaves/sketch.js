
let boxClass = class {
  constructor(width, lenght,height) {
    this.width = width
    this.height = height
    this.height = height
  }
  draw(value, xIndex, yIndex) {
    translate(this.width*xIndex+.2, this.width*yIndex+.2)
    fill(10*xIndex)
    box(this.width, this.height)
  }
}

let boxMatrix = []

let yQuantity = 10
let xQuantity = 10

let totWidth = 400
  let totLenght = 400
let height = 100

for (var xValue = 0, len = xQuantity; xValue < len; xValue++) {
  boxMatrix.push([])
  for (var yValue = 0, len = yQuantity; yValue < len; yValue++) {
    //boxMatrix.push(new boxClass(totWidth / xQuantity, totLenght / yQuantity, height))
    boxMatrix[xValue].push(new boxClass(2,2,100))
    
  }
}

function setup() {
  createCanvas(600, 600, WEBGL)
  normalMaterial()
}

function draw() {
  background(200)
  orbitControl()
  camera(1000,1000,0)
  boxMatrix.forEach((x,xIndex) => {
    x.forEach((y, yIndex) => {
      y.draw(10, xIndex, yIndex)
    })
  })

}
