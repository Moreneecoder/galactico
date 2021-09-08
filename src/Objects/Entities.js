class Entity extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, type) {
        super(scene, x, y, key);

        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.setData("type", type);
        this.setData("isDead", false);

    }
}

class Player extends Entity {
    constructor(scene, x, y, key) {
        super(scene, x, y, key, "Player");

        this.setData("speed", 200);        
        this.play("player");

        this.setData("isShooting", false);
        this.setData("timerShootDelay", 10);
        this.setData("timerShootTick", this.getData("timerShootDelay") - 1);

    }

    moveUp() {
      this.body.velocity.y = -this.getData("speed");
    }
      
    moveDown() {
        this.body.velocity.y = this.getData("speed");
    }
      
    moveLeft() {
        this.body.velocity.x = -this.getData("speed");
    }
      
    moveRight() {
        this.body.velocity.x = this.getData("speed");
    }

    update() {
      this.body.setVelocity(0, 0);

      this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
      this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);

      this.enablePlayerShooting()
    }

    enablePlayerShooting() {
        if (this.getData("isShooting")) {
            if (this.getData("timerShootTick") < this.getData("timerShootDelay")) {
              this.setData("timerShootTick", this.getData("timerShootTick") + 1); // every game update, increase timerShootTick by one until we reach the value of timerShootDelay
            }
            else { // when the "manual timer" is triggered:
              let laser = new PlayerLaser(this.scene, this.x, this.y - 50);
              this.scene.playerLasers.add(laser);
            
            //   this.scene.sfx.laser.play(); // play the laser sound effect
              this.setData("timerShootTick", 0);
            }
        }
    }
}

class Enemy extends Entity {
    constructor(scene, x, y) {
      super(scene, x, y, "enemy", "Enemy");
      this.play("enemy");

      this.body.velocity.y = Phaser.Math.Between(50, 100);      
      this.shootTimer = this.shootAtIntervals(1000, this.spawnEnemyLaser)
    }

    shootAtIntervals(interval, callback) {
        return this.scene.time.addEvent({
            delay: interval,
            callback,
            callbackScope: this,
            loop: true
          });
    }

    spawnEnemyLaser() {
            let laser = new EnemyLaser(
              this.scene,
              this.x,
              this.y
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

class PlayerLaser extends Entity {
    constructor(scene, x, y) {
        super(scene, x, y, "playerLaser");
        this.body.velocity.y = -200;
    }
}

class EnemyLaser extends Entity {
    constructor(scene, x, y) {
      super(scene, x, y, "enemyLaser");
      this.body.velocity.y = 200;
      
    }  
}

export {Player, Enemy, EnemyLaser}