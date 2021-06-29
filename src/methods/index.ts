const camelCase = (str: string) => pascalCase(str).replace(/\b(\w)/g, s => s.toLowerCase());

const kebabCase = (str: string) => str.split(' ').join('-');

const limitChars = (str: string, limit: number, append = '') =>
  `${str.substring(0, limit)} ${append}`.trim();

const limitWords = (str: string, limit: number, append = '') =>
  `${str.split(' ').slice(0, limit).join(' ')} ${append}`.trim();

const pascalCase = (str: string) => titleCase(str).split(' ').join('');

const removeWhitespace = (str: string) => str.replace(/\s(?=\s)/g, '').trim();

const revertCamelCase = (str: string) =>
  str
    .split(/(?=[A-Z]+|[0-9])/)
    .join(' ')
    .toLowerCase();

const revertKebabCase = (str: string) => str.split('-').join(' ');

const revertPascalCase = (str: string) =>
  str
    .split(/(?=[A-Z]+|[0-9])/)
    .join(' ')
    .toLowerCase();

const revertSnakeCase = (str: string) => str.split('_').join(' ');

const snakeCase = (str: string) => str.split(' ').join('_');

const titleCase = (str: string) => str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());

export {
  camelCase,
  kebabCase,
  limitChars,
  limitWords,
  pascalCase,
  removeWhitespace,
  revertCamelCase,
  revertKebabCase,
  revertPascalCase,
  revertSnakeCase,
  snakeCase,
  titleCase,
};
