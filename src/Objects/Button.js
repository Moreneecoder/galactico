import Phaser from 'phaser';
import config from '../Config/config';

export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key1, key2, text, targetScene, displayWidth = 0.3, textSize = '35px') {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.button = this.scene.add.sprite(0, 0, key1).setInteractive();

    this.button.displayWidth = config.width * displayWidth;
    this.button.scaleY = this.button.scaleX * 0.8;

    this.text = this.scene.add.text(0, 0, text, { fontSize: textSize, fill: '#fff' });
    Phaser.Display.Align.In.Center(this.text, this.button);

    this.add(this.button);
    this.add(this.text);

    this.button.on('pointerdown', () => {
      this.scene.scene.start(targetScene);
    });

    this.button.on('pointerover', () => {
      this.button.setTexture(key2);
    });

    this.button.on('pointerout', () => {
      this.button.setTexture(key1);
    });

    this.scene.add.existing(this);
  }
}