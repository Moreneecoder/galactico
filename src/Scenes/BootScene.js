import Phaser from 'phaser';

import logo from '../assets/zenva_logo.png';

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', logo);

    this.styleCanvas();
  }

  create() {
    this.scene.start('Preloader');
  }

  styleCanvas() {
    const canvas = document.querySelector('canvas');
    canvas.style.marginLeft = '20%';
    canvas.style.marginTop = '25px';
    canvas.style.borderRadius = '10px'
  }
}

export default BootScene;