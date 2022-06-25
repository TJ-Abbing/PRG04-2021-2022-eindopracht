console.log(`Running keyboardsFish.ts..`)

import * as PIXI from 'pixi.js'
import { Game } from './game';
import { Sealife } from './sealife';

export class Shark extends Sealife{

    private speed = 40;
    
    constructor(texture: PIXI.Texture, game: Game){
        super(texture, game);
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        // window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }
    // onKeyUp(e: KeyboardEvent): any {
    //     console.log('keyup');
    // }
    onKeyDown(e: KeyboardEvent): any {
        // console.log(e.key.toUpperCase());
        switch (e.key.toUpperCase()) {
            case "W":
            case "ARROWUP":
                this.y -= this.speed;
                break;
            case "S":
            case "ARROWDOWN":
                this.y += this.speed;
                break;
            case "A":
            case "ARROWLEFT":
                this.x -= this.speed;
                break;
            case "D":
            case "ARROWRIGHT":
                this.x += this.speed;
                break;
        }
    }
    public update(delta: number){
       
    }
}

console.log(`Runnning shark.ts.`)