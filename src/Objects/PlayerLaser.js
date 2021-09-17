import Entity from './Entities';

class PlayerLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'playerLaser');
    this.body.velocity.y = -200;
  }
}

export default PlayerLaser;