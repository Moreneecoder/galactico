# Ultra Wars
> A Javascript space shooter game. Powered by Phaser3 Game Library.

## About The Game
The Ultra wars game is a shooter game that requires the player to kill as many emeny battleships as possible. Also, the player will need to avoid collision with enemy ships and laser to avoid being killed. The more enemies you kill, the higher you rank on the leaderboard.

## Snapshots

> Menu Scene
> 
![](https://user-images.githubusercontent.com/38987207/133655470-6b43d23d-a86c-42fa-b637-3a5296084cfe.png)

> Game Scene
> 
![](https://user-images.githubusercontent.com/38987207/133655665-1fc00720-55f2-4070-a8e5-39f26facb7dd.png)

> HighScore Scene
> 
![](https://user-images.githubusercontent.com/38987207/133655849-dbaf4524-caa5-4a64-b6c3-f9ab34847ca1.png)

## Built with

- JavaScript
- [PHASER 3 Libary](http://phaser.io/) - for Game Mechanics
- [Webpack](https://webpack.js.org/) -for code bundling/compiling
- [Jest](https://jestjs.io/) - for unit testing

## Live Demo

[Ultra Wars](https://ultrawars.netlify.app/)

## HOW TO PLAY
### Navigation Steps

* After loading the game, the player is taken to the `Menu Scene`.
* To play the game, click on the `Play` button.
* To see the options, like toggling the game sounds and music, click the `Options` button.
* To see the game credits, click on the `Credits` button
* To see the leaderboard, click on the `Scores` list.

### Game Play and Controls

As stated above, the `play` button takes you to the Game scene. Below are the commands to control the player ship:
* To move the player left, press down the `Left Arrow` button on your computer.
* To move the player right, press down the `Right Arrow` button on your computer.
* To move the player Up, press down the `Up Arrow` button on your computer.
* To move the player down, press down the `Down Arrow` button on your computer.
* You can also move the player diagonally, by pressing the `Up + Left`, `Up + Right`, `Down + Left`, `Down + Right` arrow buttons, to move `Up-Left`, `Up-Right`, `Down-left` and `Down-Right` respectively.
* Stop moving, simply **PRESS NOTHING**.
* To shoot at enemies, press the `SPACE BAR` button.

> **NOTE**: Each enemy you successfully kill earns you 10 points. Kill as many enemies as possible to increase your chance of appearing on the Leaderboard. If you're shot or collide with an enemy ship, it's game over 😔💔.

## Local Installation
To setup a local version of this project on your machine, follow the short simple steps below and you'll be all set in no time.

### Set up
* Open your terminal and navigate to the directory where you will like to clone this project into. E.g: `cd documents/projects`
* Run `git clone https://github.com/Moreneecoder/ultra-wars.git` to download this project into the directory you have selected.
* Run `npm install` to install all dependencies like Webpack and bootstrap

### Usage
* Navigate to the project's directory using the cd command.
* Run `npm start`. This will compile the project and open it up in your browser

To build/compile your javascript modules into a single source file with webpack:
* Run `npm run build`

### Tests
This project uses `Jest` for its unit testing. To run tests:
* Navigate to the project's root directory.
* Run `npm run test`. This will run your code against the project test suites.

## Authors

👤 **Bello Morenikeji Fuad**

- GitHub: [@moreenecoder](https://github.com/Moreneecoder)
- Twitter: [@mo_bello19](https://twitter.com/mo_bello19)
- LinkedIn: [Morenikeji Bello](https://linkedin.com/morenikeji-bello)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

[Microverse](https://microverse.org)

## 📝 License

This project is [MIT](./LICENSE) licensed.
