import Phaser from 'phaser';

import logo from '../assets/zenva_logo.png';

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', logo);

    const canvas = document.querySelector('canvas')    
    canvas.style.marginLeft = '20%';
  }

  create() {
    this.scene.start('Preloader');
  }
}

export default BootScene;