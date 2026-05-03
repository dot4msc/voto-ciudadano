import Phaser from "phaser";
import { MainScene } from "./MainScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 600,
  height: 400,
  parent: "main",
  physics: {
    default: "arcade",
    arcade: {
      gravity: {x: 0, y: 0},
      debug: true,
    }
  },
  pixelArt: true,
  scene: [MainScene],
};

new Phaser.Game(config)