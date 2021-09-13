import Phaser from 'phaser';
import Entity from './Entities';
import PlayerLaser from './PlayerLaser';

class Player extends Entity {
  constructor(scene, x, y, key, name) {
    super(scene, x, y, key, 'Player');

    this.name = name
    this.scene = scene

    this.setData('speed', 200);
    this.play('player');

    this.setData('isShooting', false);
    this.setData('timerShootDelay', 10);
    this.setData('timerShootTick', this.getData('timerShootDelay') - 1);
  }

  displayName() {
    this.scene.add.text(16, 16, `Player: ${this.name}`, { fontSize: '32px', fill: '#fff' });
  }

  moveUp() {
    this.body.velocity.y = -this.getData('speed');
  }

  moveDown() {
    this.body.velocity.y = this.getData('speed');
  }

  moveLeft() {
    this.body.velocity.x = -this.getData('speed');
  }

  moveRight() {
    this.body.velocity.x = this.getData('speed');
  }

  update() {
    this.body.setVelocity(0, 0);

    this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
    this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);

    this.enablePlayerShooting();
  }

  onDestroy() {
    this.scene.time.addEvent({ // go to game over scene
      delay: 1000,
      callback: () => {
        this.scene.scene.start('GameOver');
      },
      callbackScope: this,
      loop: false,
    });
  }

  enablePlayerShooting() {
    if (this.getData('isShooting')) {
      if (this.getData('timerShootTick') < this.getData('timerShootDelay')) {
        this.setData('timerShootTick', this.getData('timerShootTick') + 1); // every game update, increase timerShootTick by one until we reach the value of timerShootDelay
      } else { // when the "manual timer" is triggered:
        const laser = new PlayerLaser(this.scene, this.x, this.y - 30);
        this.scene.playerLasers.add(laser);

        this.scene.sfx.laser.play(); // play the laser sound effect
        this.setData('timerShootTick', 0);
      }
    }
  }

  stopShooting() {
    this.setData('timerShootTick', this.getData('timerShootDelay') - 1);
    this.setData('isShooting', false);
  }
}

export default Player;