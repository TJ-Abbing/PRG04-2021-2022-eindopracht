console.log(`Running pixi.js..`) // FIRST LOG

// Imports
console.log('Running imports..')
import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"
import { Fish } from './fish';

export class Game{
    // Canvas size settings
    pixiWidth = 800;
    pixiHeight = 450;
    // globals
    pixi : PIXI.Application;
    loader : PIXI.Loader;
    // fish : PIXI.Sprite;
    fish : Fish;
    fishes : Fish[];
    /**
     * Constructor
     * 
     * Initialize Pixi
     * Load assets
     */
    constructor(){
        this.fishes = [];
        this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight });
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);
        this.loader = new PIXI.Loader();
        this.loader.add('fishTexture', fishImage)
            .add('bubbleTexture', bubbleImage)
            .add('waterTexture', waterImage);
        this.loader.load(()=>this.loadCompleted());
    }
    /**
     * Load Completed
     * 
     * Runs after assets loaded
     * Creates background
     * Creates bubbles
     * Creates fishes
     */
    loadCompleted() {
        let water = new PIXI.Sprite(this.loader.resources["waterTexture"].texture!);
        water.height = this.pixiHeight; // Gives the water the same height as the canvas.
        water.width = this.pixiWidth; // Gives the water the same width as the canvas.
        this.pixi.stage.addChild(water); // Adds the water.
        this.fish = new Fish(this.loader.resources["fishTexture"].texture!)
        // this.fish.anchor.set(0.5)
        this.pixi.stage.addChild(this.fish)
        for(let i = 0; i < 5; i++){
            let temp = new Fish(this.loader.resources["fishTexture"].texture!);
            this.pixi.stage.addChild(temp);
            this.fishes.push(temp);
        }
        
        this.pixi.ticker.add((delta)=>this.update(delta));
    }
    /**
     * Update
     * @param delta 
     * 
     * Updates fishes & bubbles
     */
    update(delta: number){
        this.fish.update(delta);
        for(let f = 0; f < this.fishes.length; f++){
            this.fishes[f].update(delta);
        }
    }
}
new Game();

console.log(`Finished pixi.js.`) // LAST LOG