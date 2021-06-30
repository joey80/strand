import {
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
} from './methods';

class Strand {
  private string: string;

  static chain(str: string) {
    return new Strand(str);
  }

  constructor(str: string) {
    this.string = str;
  }

  camelCase() {
    this.string = camelCase(this.string);
    return this;
  }

  get() {
    return this.string;
  }

  kebabCase() {
    this.string = kebabCase(this.string);
    return this;
  }

  limitChars(limit: number, append = '') {
    this.string = limitChars(this.string, limit, append);
    return this;
  }

  limitWords(limit: number, append = '') {
    this.string = limitWords(this.string, limit, append);
    return this;
  }

  pascalCase() {
    this.string = pascalCase(this.string);
    return this;
  }

  removeWhitespace() {
    this.string = removeWhitespace(this.string);
    return this;
  }

  revertCamelCase() {
    this.string = revertCamelCase(this.string);
    return this;
  }

  revertKebabCase() {
    this.string = revertKebabCase(this.string);
    return this;
  }

  revertPascalCase() {
    this.string = revertPascalCase(this.string);
    return this;
  }

  revertSnakeCase() {
    this.string = revertSnakeCase(this.string);
    return this;
  }

  snakeCase() {
    this.string = snakeCase(this.string);
    return this;
  }

  titleCase() {
    this.string = titleCase(this.string);
    return this;
  }
}

const { chain } = Strand;

export {
  camelCase,
  chain,
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
