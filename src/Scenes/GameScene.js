import 'phaser';
import PlayerImg from '../assets/hero.png'
import EnemyImg from '../assets/enemy.png'
import { Enemy, Player } from '../Objects/Entities';

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.loadSprite("player", PlayerImg, 100, 50)
    this.loadSprite('enemy', EnemyImg, 16, 16)
    this.load.image('enemy', EnemyImg)
  }

  create() {

    this.enableSpriteAnimation('playerObj', 'player', 20, -1)
    this.enableSpriteAnimation('enemyObj', 'enemy', 20, -1)

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

    this.time.addEvent({
      delay: 1000,
      callback: function() {
        let enemy = new Enemy(
          this,
          Phaser.Math.Between(0, this.game.config.width),
          0
        );
        this.enemies.add(enemy);
      },
      callbackScope: this,
      loop: true
    });

  }

  update() {
    this.player.update();
    this.playerMovement();
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

}

export default GameScene;