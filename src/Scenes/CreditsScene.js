/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */

import Phaser from 'phaser';
import config from '../Config/config';
import Background from '../Objects/Background';

class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.background = new Background(this, 'background', 0);

    this.creditsText = this.add.text(0, 0, 'CREDITS', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Created By: BELLO MORENIKEJI FUAD', { fontSize: '26px', fill: '#fff' });

    const github = document.createElement('a');
    github.setAttribute('href', 'https://github.com/Moreneecoder');
    this.style(github, { textDecoration: 'none', color: 'white' });

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fa', 'fa-github');
    this.style(githubIcon, { fontSize: '3em' });

    github.appendChild(githubIcon);

    this.githubDom = this.add.dom(
      this.game.config.width * 0.2,
      this.game.config.height / 1.7,
      github,
    );

    const linkedin = document.createElement('a');
    linkedin.setAttribute('href', 'https://www.linkedin.com/in/morenikeji-bello/');
    this.style(linkedin, { textDecoration: 'none', color: 'white' });

    const linkedIcon = document.createElement('i');
    linkedIcon.classList.add('fa', 'fa-linkedin');
    this.style(linkedIcon, { fontSize: '3em' });

    linkedin.appendChild(linkedIcon);

    this.linkedInDom = this.add.dom(
      this.game.config.width * 0.5,
      this.game.config.height / 1.7,
      linkedin,
    );

    const twitter = document.createElement('a');
    twitter.setAttribute('href', 'https://www.twitter.com/mo_bello19/');
    this.style(twitter, { textDecoration: 'none', color: 'white' });

    const twitterIcon = document.createElement('i');
    twitterIcon.classList.add('fa', 'fa-twitter');
    this.style(twitterIcon, { fontSize: '3em' });

    twitter.appendChild(twitterIcon);

    this.twitterDom = this.add.dom(
      this.game.config.width * 0.8,
      this.game.config.height / 1.7,
      twitter,
    );

    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone,
    );

    this.creditsText.setY(200);
    this.madeByText.setY(250);
  }

  style = (element, props) => {
    Object.entries(props).forEach((prop) => {
      element.style[prop[0]] = prop[1];
    });
  }
}

export default CreditsScene;