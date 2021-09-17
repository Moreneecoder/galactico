import * as ldAPI from '../src/API/ldboard';
import 'regenerator-runtime';

describe('Store new score in leaderboard API', () => {
  ldAPI.store = jest.fn().mockImplementation((user, score) => ({
    user, score,
  }));

  it('expects first argument to be a string', async () => {
    const response = await ldAPI.store('A name', 20);
    expect(typeof response.user).toBe('string');
  });

  it('expects second argument to be a number', async () => {
    const response = await ldAPI.store('A name', 20);
    expect(typeof response.score).toBe('number');
  });

  it('expects to fails with an error', async () => {
    try {
      await ldAPI.store('A name');
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
});

describe('Get scores data from leaderboard', () => {
  ldAPI.getScores = jest.fn().mockImplementation(() => {
    const data = {
      result: [
        {
          user: 'Jack Sparrow',
          score: 20,
        },
        {
          user: 'Peter Parker',
          score: 35,
        },
        {
          user: 'Goretti',
          score: 15,
        },
      ],
    };

    return Promise.resolve({
      json: () => Promise.resolve(data),
    });
  });

  it('returns an array', async () => {
    const output = await ldAPI.getScores();
    const response = await output.json();
    expect(response.result).toBeInstanceOf(Array);
  });

  it('returns an object as an element in the array', async () => {
    const output = await ldAPI.getScores();
    const response = await output.json();
    expect(response.result[1]).toBeInstanceOf(Object);
  });
});

describe('setConfig', () => {
  const config = ldAPI.setConfig('keji', 30);

  it('expects fetch configuration to be an Object', () => {
    expect(config).toBeInstanceOf(Object);
  });

  it('expects method to be post', () => {
    expect(config.method).toBe('POST');
  });

  it('expects method to not be GET', () => {
    expect(config.method).not.toBe('GET');
  });

  it('expects mode to be CORS enabled', () => {
    expect(config.mode).toBe('cors');
  });

  it('expects headers to be an object', () => {
    expect(config.headers).toBeInstanceOf(Object);
  });

  it('expects content-type to be json', () => {
    expect(config.headers['Content-Type']).toBe('application/json');
  });

  it('expects accept response type to be json', () => {
    expect(config.headers.Accept).toBe('application/json');
  });

  it('expects fetch body to be an Object', () => {
    expect(JSON.parse(config.body)).toBeInstanceOf(Object);
  });

  it('expects user value in body to be a string', () => {
    expect(typeof JSON.parse(config.body).user).toBe('string');
  });

  it('expects user value in body to be keji', () => {
    expect(JSON.parse(config.body).user).toBe('keji');
  });

  it('expects score value in body to be a number', () => {
    expect(typeof JSON.parse(config.body).score).toBe('number');
  });

  it('expects score value in body to be 20', () => {
    expect(JSON.parse(config.body).score).toBe(30);
  });
});
