import * as LeaderBoardAPI from "../API/ldboard";

class Score {
  constructor(scene) {
    this.count = 0;
    this.text = scene.add.text(16, 48, 'Score: 0', { fontSize: '32px', fill: '#fff' });
  }

  increase() {
    this.count += 10;
  }

  update() {
    this.text.setText(`Score: ${this.count}`);
  }

  saveToApi = (player) => {
    LeaderBoardAPI.store(player, this.count)
  }
  
}

export default Score;