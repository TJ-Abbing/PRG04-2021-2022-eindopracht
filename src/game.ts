console.log(`Running game.ts..`) // FIRST LOG

const scoreText = new PIXI.Text(`Score : 0`)
scoreText.style = new PIXI.TextStyle({
    fill: 0xFFFFFF
})

// Imports
console.log('Running imports..')
import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import sharkImage from "./images/shark.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"

import { Fish } from './fish';
import { Bubble } from './bubble'
import { KeyboardFish } from './keyboardFish';

export class Game{

    // Canvas size settings
    private pixiWidth = 1600;
    private pixiHeight = 900;
    
    // globals
    private killCounter = 0;
    private pixi : PIXI.Application;
    private loader : PIXI.Loader;
    private keyboardFish : Fish;
    private bubbles : Bubble[];
    private fishes : Fish[];

    /**
     * Constructor
     * 
     * Initialize Pixi
     * Load assets
     */
    constructor(){
        this.fishes = [];
        this.bubbles = [];
        this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight });
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);
        this.loader = new PIXI.Loader();
        this.loader.add('fishTexture', fishImage)
            .add('sharkTexture', sharkImage)
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
        this.pixi.stage.addChild(scoreText); // Adds the water.

        for(let i = 0; i < 5; i++){
            let temp = new Fish(this.loader.resources["fishTexture"].texture!, this);
            this.pixi.stage.addChild(temp);
            this.fishes.push(temp);
        }

        for(let i = 0; i < 5; i++){
            let temp = new Bubble(this.loader.resources["bubbleTexture"].texture!, this);
            this.pixi.stage.addChild(temp);
            this.bubbles.push(temp);
        }

        this.keyboardFish = new KeyboardFish(this.loader.resources["sharkTexture"].texture!, this);
        this.pixi.stage.addChild(this.keyboardFish)
        
        this.pixi.ticker.add((delta)=>this.update(delta));
    }
    private update(delta: number){
        this.keyboardFish.update(delta);

        for(let f = 0; f < this.fishes.length; f++){
            this.fishes[f].update(delta);
            if(this.collision(this.keyboardFish, this.fishes[f])){  
                console.log(`Running fish repositioning..`)    
                this.fishes[f].x = 1600
                this.fishes[f].y = Math.random() * 900;
                this.fishes[f].tint = Math.random() * 0xFF0000;
                console.log(`Finished fish repositioning.`)
                this.death()
            }       
        }

        for(let f = 0; f < this.fishes.length; f++){
            this.bubbles[f].update(delta);     
        }

    }

    private collision(sprite1:PIXI.Sprite, sprite2:PIXI.Sprite) {
        const bounds1 = sprite1.getBounds()
        const bounds2 = sprite2.getBounds()
        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    }

    public death(){
        this.killCounter++
        console.log(`Current amount of kills: ${this.killCounter}`)
        scoreText.text = `Score : ${this.killCounter}`;
    }
}
new Game();

console.log(`Finished pixi.js.`) // LAST LOG