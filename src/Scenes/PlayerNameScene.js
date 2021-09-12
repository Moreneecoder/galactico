import Phaser from 'phaser';

class PlayerNameScene extends Phaser.Scene {
    constructor() {
        super('PlayerName');       
    }

    create() {
      this.text = this.add.text(this.game.config.width * 0.3, 100, 'ENTER YOUR NAME', { fontSize: 40 });

      this.nameInput = this.add.dom(this.game.config.width * 0.3, 360).createFromCache("form");
    }
}

export default PlayerNameScene