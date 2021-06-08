//box class
let Box = class {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
  draw(value, index) {
    rect(500 / quantity * index, 300, this.width, this.height * sin(value/20 + index/2))
    fill(255)
  }
}

//variables
let quantity = 40
let array = []

let height = 100
let width = (500 / quantity) - 5

let loopIndex = 0

//inizialize array
for (let i = 0; i< quantity; i++) {
  array.push(new Box(height, width))
  console.log('ciao')
}


function setup() {
  createCanvas(800, 800)
}


function draw() {
  background(0)
  array.forEach((el, index) => {
    el.draw(loopIndex, index)
  })
  loopIndex++

}
