import Phaser from 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 150, 'archaicBtn', 'archaicBtn', 'Play', 'PlayerName');
    this.optionsButton = new Button(this, config.width / 2, config.height / 2 - 50, 'archaicBtn', 'archaicBtn', 'Options', 'Options');
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 50, 'archaicBtn', 'archaicBtn', 'Credits', 'Credits');
    this.highScoreButton = new Button(this, config.width / 2, config.height / 2 + 150, 'archaicBtn', 'archaicBtn', 'Scores', 'HighScores');

    this.model = this.sys.game.globals.model;

    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
}

export default TitleScene;