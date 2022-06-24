console.log(`Running fish.ts..`)

import * as PIXI from 'pixi.js'
import { Game } from './game';

export class Fish extends PIXI.Sprite{
    private game: Game;
    constructor(texture: PIXI.Texture, game: Game){
        super(texture); // new PIXI.Sprite()
        this.game = game;
        this.anchor.set(0.5);
        this.y = 100;
        this.tint = Math.random() * 0xFF0000;
        this.x = Math.random() * 1600;
        this.y = Math.random() * 900;
    }
    public update(delta: number){
        this.x -= Math.random() * 20;
        if(this.x < (0 - this.width)){
            this.x = 1600;
            this.y = Math.random() * 900;
        }
    }
}

console.log(`Finished fish.ts.`)