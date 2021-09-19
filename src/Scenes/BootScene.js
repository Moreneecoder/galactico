import Phaser from 'phaser';

import logo from '../assets/mo-games.png';
import PlayerImg from '../assets/hero.png';
import UltraLogo from '../assets/ultralogo.png';

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', logo);
    this.load.image('heroImg', PlayerImg);
    this.load.image('ultraLogo', UltraLogo);

    document.body.style.backgroundColor = '#4B3869';
    this.styleCanvas();
  }

  create() {
    const emoji = document.createElement('span');
    emoji.style.fontSize = '5em';
    emoji.innerHTML = '&#129492;&#127998';

    const logoImg = this.add.image(450, 200, 'logo');
    logoImg.setDisplaySize(400, 300);

    this.miniText = this.add.text(
      this.game.config.width * 0.45,
      this.game.config.height / 2.3,
      '- PRESENTS -',
      { fontSize: 22 },
    );

    this.emojiDom = this.add.dom(
      this.game.config.width * 0.27,
      this.game.config.height / 3,
      emoji,
    );

    this.time.addEvent({
      delay: 3000,
      callback: () => {
        this.scene.start('Preloader');
      },
      callbackScope: this,
      loop: true,
    });
  }

  styleCanvas = () => {
    const canvas = document.querySelector('canvas');
    const screenMath = ((window.screen.width - this.game.config.width) / 2);
    canvas.style.marginLeft = `${screenMath}px`;
    canvas.style.marginTop = '25px';
    canvas.style.borderRadius = '10px';
    canvas.style.boxShadow = '10px 20px 15px #664E88';
  }
}

export default BootScene;