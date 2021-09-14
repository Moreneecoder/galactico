
    const apiKey = 'KdmaTO7csEf9o0JujaCi';
    const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`;

    const setConfig = (user, score) => {
        return ({
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({ user, score }),
          })
    }

  const store = (player, score) => {
    return fetch(url, setConfig(player, score));
  }

  const getScores = () => {
    return fetch(url)
  }

export { store, getScores }