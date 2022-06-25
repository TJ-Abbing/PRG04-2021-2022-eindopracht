console.log(`Running fish.ts..`)

import * as PIXI from 'pixi.js'
import { Game } from './game';
import { Sealife } from './sealife';

export class Fish extends Sealife{

    constructor(texture: PIXI.Texture, game: Game){
        super(texture, game);
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