import Phaser from 'phaser';
import Button from '../Objects/Button';
import archaicBtn from '../assets/ui/button.png';

class PlayerNameScene extends Phaser.Scene {
    constructor() {
        super('PlayerName');       
    }

    preload() {
        this.load.image('archaicBtn', archaicBtn);
    }

    create() {
      this.text = this.add.text(this.game.config.width * 0.28, 100, 'ENTER YOUR NAME', { fontSize: 40 });

      const input = document.createElement('input')
      input.style.padding = '1em'
      input.style.width = `${(this.game.config.width / 2).toString()}px`
      input.style.fontSize = '1.5em'
      input.style.textAlign = 'center'
      input.style.fontWeight = 'bold'
      
      this.nameInput = this.add.dom(this.game.config.width / 2, this.game.config.height / 2.5, input)
    
      this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

      this.returnKey.on("down", event => {        
        if(input.value != "") {
            // this.message.setText("Hello, " + name.value);
            console.log(input.value);
            input.value = "";
        }
      });
    }
}

export default PlayerNameScene