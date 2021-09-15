import * as ldAPI from '../src/API/ldboard'
import 'regenerator-runtime'

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


