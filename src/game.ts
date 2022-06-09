console.log(`Running pixi.js..`) // FIRST LOG

// Imports
console.log('Running imports..')
import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"

class Test {
    test = true
}

let test = new Test()

console.log(`The test is ${test.test}`)

// Creates pixi canvas
console.log('Creating pixi canvas..')
const pixi = new PIXI.Application({ width: 800, height: 450 })
document.body.appendChild(pixi.view)


// Preloads all images
console.log(`Preloading images..`)
const loader = new PIXI.Loader()
loader.add('fishTexture', fishImage)
      .add('bubbleTexture', bubbleImage)
      .add('waterTexture', waterImage)
loader.load(()=>loadCompleted())

// Creates sprite when images are loaded
console.log(`Creatings sprites..`)
function loadCompleted() {
    let fish = new PIXI.Sprite(loader.resources["fishTexture"].texture!)
    pixi.stage.addChild(fish)
}

console.log(`Finished pixi.js.`) // LAST LOG