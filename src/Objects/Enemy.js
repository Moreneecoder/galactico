import Phaser from 'phaser';
import Entity from './Entities';
import EnemyLaser from './EnemyLaser';

class Enemy extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'enemy', 'Enemy');
    this.play('enemy');

    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.shootTimer = this.shootAtIntervals(1000, this.spawnEnemyLaser);
  }

  shootAtIntervals(interval, callback) {
    return this.scene.time.addEvent({
      delay: interval,
      callback,
      callbackScope: this,
      loop: true,
    });
  }

  spawnEnemyLaser() {
    const laser = new EnemyLaser(
      this.scene,
      this.x,
      this.y,
    );
    laser.setScale(this.scaleX);
    this.scene.enemyLasers.add(laser);
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }
}

export default Enemy;