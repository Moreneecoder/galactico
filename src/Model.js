class Model {
  constructor() {
    this.SoundOn = true;
    this.MusicOn = true;
    this.BgMusicPlaying = false;
  }

  set musicOn(value) {
    this.MusicOn = value;
  }

  get musicOn() {
    return this.MusicOn;
  }

  set soundOn(value) {
    this.SoundOn = value;
  }

  get soundOn() {
    return this.SoundOn;
  }

  set bgMusicPlaying(value) {
    this.BgMusicPlaying = value;
  }

  get bgMusicPlaying() {
    return this.BgMusicPlaying;
  }
}

export default Model;