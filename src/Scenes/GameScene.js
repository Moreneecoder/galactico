import 'phaser';
// import Logo from '../assets/logo.png';
import PlayerImg from '../assets/hero.png'
import { Player } from '../Objects/Entities';

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.loadSprite("player", PlayerImg, 300, 200)
  }

  create() {

    this.enableSpriteAnimation('player', 'player', 20, -1)

    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.7,
      "player"
    );

  }

  loadSprite(key, obj, width, height) {
    this.load.spritesheet(key, obj, {
      frameWidth: width,
      frameHeight: height
    });
  }

  enableSpriteAnimation(key, obj, frame, loopValue) {
    this.anims.create({
      key,
      frames: this.anims.generateFrameNumbers(obj),
      frameRate: frame,
      repeat: loopValue
    });
  }

}

export default GameScene;