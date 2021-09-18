/* eslint-disable no-unused-expressions */

import Phaser from 'phaser';
import Button from '../Objects/Button';
import Background from '../Objects/Background';

class StoryScene extends Phaser.Scene {
  constructor() {
    super('Story');
  }

  create() {
    this.background = new Background(this, 'background', 0);

    const story = `
        In the year 3078, the people of Khandor are
        continously invaded by the the brutal 
        forces of Ashbane. Their lands were pillaged 
        and their best men and women taken, never
        to be seen again.

        The ruling council have however, charged
        you, ${localStorage.getItem('ultraName').toUpperCase()} to put a stop to this madness. 
        The survival of the kingdom LIES IN YOUR HANDS!`;

    this.creditsText = this.add.text(this.game.config.width * 0.1, 0, story, { fontSize: '2em', fill: '#fff' });

    this.highScoreButton = new Button(this, this.game.config.height * 0.12, this.game.config.height - 50, 'archaicBtn', 'archaicBtn', 'Skip', 'Game', 0.15, '24px');

    this.creditsText.setY(600);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -300,
      ease: 'Power1',
      duration: 30000,
      delay: 1000,
      onComplete: () => {
        this.creditsTween.destroy;
        this.scene.start('Game');
      },
    });
  }
}

export default StoryScene;