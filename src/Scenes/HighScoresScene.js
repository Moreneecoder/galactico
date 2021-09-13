import Phaser from 'phaser'
import * as LeaderBoardAPI from "../API/ldboard";

class HighScoresScene extends Phaser.Scene {
    constructor() {
      super('HighScores');
    }

    create() {
      this.getScores()
    }

    getScores = () => {
        const result = LeaderBoardAPI.getScores();
    
        result.then( response => {
            return response.json();
        })
        .then(response => {
            console.log(response);        
        })
    }
}

export default HighScoresScene