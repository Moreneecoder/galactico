import Phaser from 'phaser';

import logo from '../assets/mo-games.png';

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', logo);    

    document.body.style.backgroundColor = '#4B3869';
    this.styleCanvas();
  }

  create() {
    const emoji = document.createElement('span');    
    emoji.style.fontSize = '5em';    
    emoji.innerHTML = '&#129492;&#127998';

    const logoImg = this.add.image(450, 200, 'logo');
    logoImg.setDisplaySize(400, 300)

    this.miniText = this.add.text(
      this.game.config.width * 0.45,
      this.game.config.height / 2.3,
      '- PRESENTS -',
      { fontSize: 22 }
  );

    this.emojiDom = this.add.dom(
      this.game.config.width * 0.27,
      this.game.config.height / 3,
      emoji,
    );

    // this.scene.start('Preloader');
  }

  styleCanvas = () => {
    const canvas = document.querySelector('canvas');
    canvas.style.marginLeft = '20%';
    canvas.style.marginTop = '25px';
    canvas.style.borderRadius = '10px';
    canvas.style.boxShadow = '10px 20px 15px #664E88';
  }
}

export default BootScene;