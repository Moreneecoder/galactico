import Phaser from 'phaser';
import Button from '../Objects/Button';

import logo from '../assets/zenva_logo.png';

class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  preload() {
    this.load.image('logo', logo);
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    this.title.setOrigin(0.5);

    this.menuButton = new Button(this, 400, 300, 'archaicBtn', 'archaicBtn', 'Menu', 'Title');    
  }
}

export default GameOverScene;