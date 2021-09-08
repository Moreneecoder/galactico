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

    this.enableSpriteAnimation('playerObj', 'player', 20, -1)

    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.7,
      "player"
    );

    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

  }

  update() {
    this.player.update();

    if (this.keyW.isDown) {
      this.player.moveUp();
    }
    else if (this.keyS.isDown) {
      this.player.moveDown();
    }
    
    if (this.keyA.isDown) {
      this.player.moveLeft();
    }
    else if (this.keyD.isDown) {
      this.player.moveRight();
    }

  }

  loadSprite(key, obj, width, height) {
    this.load.spritesheet(key, obj, {
      frameWidth: width,
      frameHeight: height
    });
  }

  enableSpriteAnimation(key, obj, frame, loopValue) {
    this.anims.create({
      key: key,
      frames: this.anims.generateFrameNumbers(obj),
      frameRate: frame,
      repeat: loopValue
    });
  }

}

export default GameScene;