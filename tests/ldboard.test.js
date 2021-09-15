// import { expect, it } from '@jest/globals'
import * as ldAPI from '../src/API/ldboard'

it('checks', () => {
    expect(typeof ldAPI.url).toBe('string')
})