import Phaser from "phaser";

interface WASDKeys {
  w: Phaser.Input.Keyboard.Key,
  a: Phaser.Input.Keyboard.Key,
  s: Phaser.Input.Keyboard.Key,
  d: Phaser.Input.Keyboard.Key,
}

export class MainScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Image;
  private keys!: WASDKeys;
  constructor() {
    super({key: "main-scene"});
  }

  preload() {
    this.load.image("malina", "/assets/img/malina.png");
  }

  create() {
    this.player = this.physics.add.image(100,100,"malina");
    this.player.scale *= 4;
    this.keys = {
      w: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      a: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      s: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      d: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D),
    }
  }

  update(_time:number,delta: number) {
    const dt = delta / 1000;
    if(this.keys.w.isDown) {
      this.player.y -= 100 * dt;
    }
    
    if(this.keys.a.isDown) {
      this.player.x -= 100 * dt;
    }

    if(this.keys.a.isDown) {
      this.player.x -= 100 * dt;
    }

    if(this.keys.s.isDown) {
      this.player.y += 100 * dt;
    }

    if(this.keys.d.isDown) {
      this.player.x += 100 * dt;
    }
  }
}