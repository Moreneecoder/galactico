import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      // gravity: { y: 300 },
      gravity: { x: 0, y: 0 },
      debug: false,
    },
  },
  pixelArt: true,
  roundPixels: true,
};