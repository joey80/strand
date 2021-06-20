import { capitalizeWord } from '../utils'

const camelCase = (str: string) =>
  str
    .split(' ')
    .map((elm, index) => (index === 0 ? elm.toLowerCase() : capitalizeWord(elm)))
    .join('')

const kebabCase = (str: string) => str.split(' ').join('-')

const limitChars = (str: string, limit: number, append = '') =>
  `${str.substring(0, limit)} ${append}`.trim()

const limitWords = (str: string, limit: number, append = '') =>
  `${str.split(' ').slice(0, limit).join(' ')} ${append}`.trim()

const pascalCase = (str: string) =>
  str
    .split(' ')
    .map((elm) => capitalizeWord(elm))
    .join('')

const removeWhitespace = (str: string) => str.replace(/\s(?=\s)/g, '').trim()

const snakeCase = (str: string) => str.split(' ').join('_')

const titleCase = (str: string) =>
  str
    .split(' ')
    .map((elm) => capitalizeWord(elm))
    .join(' ')

export {
  camelCase,
  kebabCase,
  limitChars,
  limitWords,
  pascalCase,
  removeWhitespace,
  snakeCase,
  titleCase,
}
