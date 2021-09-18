import Phaser from 'phaser';
import config from './Config/config';
import Model from './Model';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import GameOverScene from './Scenes/GameOverScene';
import PlayerNameScene from './Scenes/PlayerNameScene';
import HighScoresScene from './Scenes/HighScoresScene';
import StoryScene from './Scenes/StoryScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);

    const model = new Model();
    this.globals = { model, bgMusic: null };

    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('PlayerName', PlayerNameScene);
    this.scene.add('Scores', HighScoresScene);
    this.scene.add('Story', StoryScene);
    // this.scene.start('Boot');
    this.scene.start('Story');
  }
}
window.game = new Game();
