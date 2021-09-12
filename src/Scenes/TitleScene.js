import 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    // Game
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 150, 'archaicBtn', 'archaicBtn', 'Play', 'Game');

    // Options
    this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'archaicBtn', 'archaicBtn', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 150, 'archaicBtn', 'archaicBtn', 'Credits', 'Credits');

    this.model = this.sys.game.globals.model;

    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  // centerButton(gameObject, offset = 0) {
  //   Phaser.Display.Align.In.Center(
  //     gameObject,
  //     this.add.zone(config.width / 2, config.height / 2 - offset * 100, config.width, config.height),
  //   );
  // }

  // centerButtonText(gameText, gameButton) {
  //   Phaser.Display.Align.In.Center(
  //     gameText,
  //     gameButton,
  //   );
  // }
}

export default TitleScene;