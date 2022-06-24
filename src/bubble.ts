console.log(`Running bubble.ts..`)

import * as PIXI from 'pixi.js'
import { Game } from './game';

export class Bubble extends PIXI.Sprite{
    private game: Game;
    constructor(texture: PIXI.Texture, game: Game){
        super(texture); // new PIXI.Sprite()
        this.game = game;
        this.anchor.set(0.5);
        this.x = Math.random() * 1600;
        this.y = Math.random() * 900;
    }
    public update(delta: number){
        this.y -= delta * 10;
        if(this.y < (0 - this.height)){
            this.x = Math.random() * 1600;
            this.y = 900;
        }
    }
}

console.log(`Finished bubble.ts.`)