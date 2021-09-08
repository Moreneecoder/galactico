import 'phaser';
import PlayerImg from '../assets/hero.png'
import EnemyImg from '../assets/enemy.png'
import EnemyLaserImg from '../assets/enemyLaser.png'
import PlayerLaserImg from '../assets/playerLaser.png'
import { Enemy, Player } from '../Objects/Entities';

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.loadSprite("player", PlayerImg, 100, 50)
    this.loadSprite('enemy', EnemyImg, 16, 16)
    // this.load.image('enemy', EnemyImg)
    this.load.image('playerLaser', PlayerLaserImg)
    this.load.image('enemyLaser', EnemyLaserImg)    
  }

  create() {

    this.enableSpriteAnimation('playerObj', 'player', 20, -1)
    this.enableSpriteAnimation('enemyObj', 'enemy', 20, -1)
    // this.enableSpriteAnimation('enemyLaserObj', 'enemyLaser', 20, -1)

    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.7,
      "player"
    );

    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();

    this.spawnEnemiesAtIntervals(1000, this.spawnEnemy)    

  }

  update() {
    this.player.update();
    this.playerMovement();

    if (this.keySpace.isDown) {
      this.player.setData("isShooting", true);
    }
    else {
      this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
      this.player.setData("isShooting", false);
    }
  }

  loadSprite(key, obj, width, height) {
    this.load.spritesheet(key, obj, {
      frameWidth: width,
      frameHeight: height
    });
  }

  enableSpriteAnimation(key, obj, frame, loopValue) {
    this.anims.create({
      key: key,
      frames: this.anims.generateFrameNumbers(obj),
      frameRate: frame,
      repeat: loopValue
    });
  }

  playerMovement() {
    if (this.keyUp.isDown) {
      this.player.moveUp();
    }
    else if (this.keyDown.isDown) {
      this.player.moveDown();
    }
    
    if (this.keyLeft.isDown) {
      this.player.moveLeft();
    }
    else if (this.keyRight.isDown) {
      this.player.moveRight();
    }
  }

  spawnEnemiesAtIntervals(interval, callback) {
    this.time.addEvent({
      delay: interval,
      callback,
      callbackScope: this,
      loop: true
    });
  }

  spawnEnemy() {
    let enemy = new Enemy(
      this,
      Phaser.Math.Between(0, this.game.config.width),
      0
    );

    this.enemies.add(enemy);
  }

}

export default GameScene;