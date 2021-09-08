import 'phaser';
// import Logo from '../assets/logo.png';
import PlayerImg from '../assets/hero.png'
import { Player } from '../Objects/Entities';

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.spritesheet("player", PlayerImg, {
      frameWidth: 300,
      frameHeight: 200
    });

  }

  create() {

    this.anims.create({
      key: "player",
      frames: this.anims.generateFrameNumbers("player"),
      frameRate: 20,
      repeat: -1
    });

    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.7,
      "player"
    );

  }

}

export default GameScene;