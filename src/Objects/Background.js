import config from '../Config/config';

class Background {
  constructor(scene, key, velocityY) {
    this.scene = scene;
    this.key = key;
    this.velocityY = velocityY;

    this.layer = this.scene.add.sprite(config.width * 0.5, config.height * 0.5, this.key);
  }
}

export default Background;