import Phaser from 'phaser';
import PlayerImg from '../assets/hero.png';
import EnemyImg from '../assets/enemy.png';
import EnemyLaserImg from '../assets/enemyLaser.png';
import PlayerLaserImg from '../assets/playerLaser.png';
import ExplosionImg from '../assets/explosion.png';
import playerLaserAudio from '../assets/playerLaser.wav';
import explodeAudio1 from '../assets/explode0.wav';
import explodeAudio2 from '../assets/explode1.wav';
import Player from '../Objects/Player';
import Enemy from '../Objects/Enemy';
import Score from '../Objects/Score';

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.loadSprite('player', PlayerImg, 100, 50);
    this.loadSprite('enemy', EnemyImg, 32, 32);
    this.loadSprite('explosion', ExplosionImg, 64, 64);

    this.load.image('playerLaser', PlayerLaserImg);
    this.load.image('enemyLaser', EnemyLaserImg);

    this.load.audio('explodeSound1', explodeAudio1);
    this.load.audio('explodeSound2', explodeAudio2);
    this.load.audio('playerLaser', playerLaserAudio);
  }

  create() {
    this.enableSpriteAnimation('playerObj', 'player', 20, -1);
    this.enableSpriteAnimation('enemyObj', 'enemy', 20, -1);
    this.enableSpriteAnimation('explosionObj', 'explosion', 20, 0);

    this.sfx = {
      explosions: [
        this.sound.add('explodeSound1'),
        this.sound.add('explodeSound2'),
      ],
      laser: this.sound.add('playerLaser'),
    };

    this.score = new Score(this);
    this.playerName = localStorage.getItem('ultraName');

    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.7,
      'player',
      this.playerName,
    );

    this.player.displayName();

    this.player.resize(0.04);

    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();

    this.spawnEnemiesAtIntervals(1000, this.spawnEnemy);

    this.physics.add.collider(this.playerLasers, this.enemies, this.collisionEffect);

    this.physics.add.overlap(this.player, this.enemies, this.overlapEffect);
    this.physics.add.overlap(this.player, this.enemyLasers, this.overlapEffect);
  }

  update() {
    if (!this.player.getData('isDead')) {
      this.player.update();
      this.playerMovement();
    } else {
      this.player.stopShooting();
    }

    this.shootLasers();

    // FUSTRUM CULLING LOGIC BEGINS

    this.cullObjectOffScreen(this.enemies);
    this.cullObjectOffScreen(this.enemyLasers);
    this.cullObjectOffScreen(this.playerLasers);

    // FUSTRUM CULLING END
  }

  loadSprite(key, obj, width, height) {
    this.load.spritesheet(key, obj, {
      frameWidth: width,
      frameHeight: height,
    });
  }

  enableSpriteAnimation(key, obj, frame, loopValue) {
    this.anims.create({
      key,
      frames: this.anims.generateFrameNumbers(obj),
      frameRate: frame,
      repeat: loopValue,
    });
  }

  playerMovement() {
    if (this.keyUp.isDown) {
      this.player.moveUp();
    } else if (this.keyDown.isDown) {
      this.player.moveDown();
    }

    if (this.keyLeft.isDown) {
      this.player.moveLeft();
    } else if (this.keyRight.isDown) {
      this.player.moveRight();
    }
  }

  spawnEnemiesAtIntervals(interval, callback) {
    this.time.addEvent({
      delay: interval,
      callback,
      callbackScope: this,
      loop: true,
    });
  }

  spawnEnemy() {
    const enemy = new Enemy(
      this,
      Phaser.Math.Between(0, this.game.config.width),
      0,
    );

    enemy.flipY = true;

    this.enemies.add(enemy);
  }

  shootLasers() {
    if (this.keySpace.isDown) {
      this.player.setData('isShooting', true);
    } else {
      this.player.setData('timerShootTick', this.player.getData('timerShootDelay') - 1);
      this.player.setData('isShooting', false);
    }
  }

  collisionEffect = (playerLaser, enemy) => {
    if (enemy) {
      if (enemy.onDestroy !== undefined) {
        enemy.onDestroy();
      }

      enemy.explode(true);
      playerLaser.destroy();

      this.score.increase();
      this.score.update();
    }
  }

  overlapEffect = (entity1, entity2) => {
    if (!entity1.getData('isDead')
          && !entity2.getData('isDead')) {
      entity1.explode(false);
      entity2.explode(true);

      this.score.saveToApi(this.playerName);

      entity1.onDestroy();
      // this.scene.start('GameOver')
    }
  }

  cullObjectOffScreen(objectList) {
    for (let i = 0; i < objectList.getChildren().length; i += 1) {
      const object = objectList.getChildren()[i];

      object.update();

      if (object.x < -object.displayWidth
        || object.x > this.game.config.width + object.displayWidth
        || object.y < -object.displayHeight * 4
        || object.y > this.game.config.height + object.displayHeight) {
        if (object) {
          if (object.onDestroy !== undefined) {
            object.onDestroy();
          }

          object.destroy();
        }
      }
    }
  }
}

export default GameScene;