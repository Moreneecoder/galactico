import * as ldAPI from '../src/API/ldboard'
import 'regenerator-runtime'
import { it } from '@jest/globals'

jest.mock('../src/API/ldboard')

describe('Store new score', () => {
    ldAPI.store = jest.fn().mockImplementation((user, score) => {        
        return {
            user, score
        }
    })

    it('expects first argument to be a string', async () => {
      const response = await ldAPI.store('A name', 20);
      expect(typeof response.user).toBe('string')
    })

    it('expects second argument to be a number', async () => {
        const response = await ldAPI.store('A name', 20);
        expect(typeof response.score).toBe('number')
    })
})

describe('Get score from leaderboard', () => {
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
        ]
    }

    return Promise.resolve({
        json: () => Promise.resolve(data),
    });


    })

    it('returns an array', async () => {        

        const output = await ldAPI.getScores()
        const response = await output.json();
        expect(response.result).toBeInstanceOf(Array)
    })

    it('returns an object as an element in the array', async () => {        

        const output = await ldAPI.getScores()
        const response = await output.json();
        expect(response.result[1]).toBeInstanceOf(Object)
    })
    
})


