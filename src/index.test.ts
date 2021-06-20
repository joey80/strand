import {
  camelCase,
  kebabCase,
  limitChars,
  limitWords,
  pascalCase,
  removeWhitespace,
  snakeCase,
  titleCase,
} from './methods'
import { capitalizeWord } from './utils'

describe('String Methods', () => {
  describe('camelCase', () => {
    it('should return the correct camelCasing of a string', () => {
      const assert1 = camelCase('joey leger')
      const assert2 = camelCase('joey leger IS MY name')
      expect(assert1).toBe('joeyLeger')
      expect(assert2).toBe('joeyLegerIsMyName')
    })
  })

  describe('kebabCase', () => {
    it('should return the correct kebab-casing of a string', () => {
      const assert1 = kebabCase('joey leger')
      const assert2 = kebabCase('joey leger IS MY name')
      expect(assert1).toBe('joey-leger')
      expect(assert2).toBe('joey-leger-IS-MY-name')
    })
  })

  describe('limitChars', () => {
    it('should limit chars', () => {
      const assert = limitChars('this is something', 7)
      expect(assert).toBe('this is')
    })

    it('should limit chars with an ellipse', () => {
      const assert = limitChars('this is something', 7, '...')
      expect(assert).toBe('this is ...')
    })
  })

  describe('limitWords', () => {
    it('should limit words', () => {
      const assert1 = limitWords('this is something else', 2)
      const assert2 = limitWords('this is something else', 3)
      expect(assert1).toBe('this is')
      expect(assert2).toBe('this is something')
    })

    it('should limit words with an ellipse', () => {
      const assert1 = limitWords('this is something', 2, '...')
      const assert2 = limitWords('this is something', 3, '...')
      expect(assert1).toBe('this is ...')
      expect(assert2).toBe('this is something ...')
    })
  })

  describe('pascalCase', () => {
    it('should return the correct PascalCasing of a string', () => {
      const assert1 = pascalCase('joey leger')
      const assert2 = pascalCase('joey leger IS MY name')
      expect(assert1).toBe('JoeyLeger')
      expect(assert2).toBe('JoeyLegerIsMyName')
    })
  })

  describe('removeWhitespace', () => {
    it('should return a string without extra whitespace', () => {
      const assert1 = removeWhitespace(' this has    extra     whitespace ')
      const assert2 = removeWhitespace('    this has        extra whitespace     ')
      expect(assert1).toBe('this has extra whitespace')
      expect(assert2).toBe('this has extra whitespace')
    })
  })

  describe('snakeCase', () => {
    it('should return the correct snake_casing of a string', () => {
      const assert1 = snakeCase('joey leger')
      const assert2 = snakeCase('joey leger IS MY name')
      expect(assert1).toBe('joey_leger')
      expect(assert2).toBe('joey_leger_IS_MY_name')
    })
  })

  describe('titleCase', () => {
    it('should return the correct Title Casing of a string', () => {
      const assert1 = titleCase('joey leger')
      const assert2 = titleCase('joey leger IS MY name')
      expect(assert1).toBe('Joey Leger')
      expect(assert2).toBe('Joey Leger Is My Name')
    })
  })
})

describe('String Utilities', () => {
  describe('captializeWord', () => {
    it('should captialize a word', () => {
      const assert1 = capitalizeWord('joey')
      const assert2 = capitalizeWord('jOeY')
      const assert3 = capitalizeWord('JOEY')
      expect(assert1).toBe('Joey')
      expect(assert2).toBe('Joey')
      expect(assert3).toBe('Joey')
    })
  })
})
