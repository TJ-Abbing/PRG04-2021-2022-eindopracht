import * as PIXI from 'pixi.js'

export class Fish extends PIXI.Sprite{
    constructor(texture: PIXI.Texture){
        super(texture); // new PIXI.Sprite()
        this.anchor.set(0.5);
        this.y = 100;
        this.tint = Math.random() * 0xFF0000;
        this.x = Math.random() * 800;
        this.y = Math.random() * 450;
    }
    update(delta: number){
        this.x -= delta * 1;
    }
}