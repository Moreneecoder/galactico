import 'phaser';
import Logo from '../assets/logo.png';

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load images
    this.load.image('logo', Logo);
  }

  create() {
    this.add.image(400, 300, 'logo');
  }
}

export default GameScene;