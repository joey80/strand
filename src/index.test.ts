import { test } from './index'
import { limitChars } from './methods'

describe('test', () => {
  it('should return the correct string', () => {
    const assert = test('joey')
    expect(assert).toBe('joey is a string')
  })

  it('should limit chars', () => {
    const assert = limitChars('this is something', 7)
    expect(assert).toBe('this is')
  })

  it('should limit chars with an ellipse', () => {
    const assert = limitChars('this is something', 7, '...')
    expect(assert).toBe('this is ...')
  })
})
