console.log(`Running sealife.ts..`)

import * as PIXI from 'pixi.js'
import { Game } from './game';

export class Sealife extends PIXI.Sprite{

    private game: Game;

    constructor(texture: PIXI.Texture, game: Game){
        super(texture); // new PIXI.Sprite() 
        this.game = game;
        this.anchor.set(0.5);
    }
}

console.log(`Finished sealife.ts.`)