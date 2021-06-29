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

describe('String Methods', () => {
  describe('camelCase', () => {
    it('should return the correct camelCasing of a string', () => {
      const assert1 = camelCase('first word second word');
      const assert2 = camelCase('this is a test');
      const assert3 = camelCase('you are just 1 person');

      expect(assert1).toBe('firstWordSecondWord');
      expect(assert2).toBe('thisIsATest');
      expect(assert3).toBe('youAreJust1Person');
    });
  });

  describe('kebabCase', () => {
    it('should return the correct kebab-casing of a string', () => {
      const assert1 = kebabCase('first word second word');
      const assert2 = kebabCase('this is a test');
      const assert3 = kebabCase('you are just 1 person');

      expect(assert1).toBe('first-word-second-word');
      expect(assert2).toBe('this-is-a-test');
      expect(assert3).toBe('you-are-just-1-person');
    });
  });

  describe('limitChars', () => {
    it('should limit chars', () => {
      const assert = limitChars('this is something', 7);

      expect(assert).toBe('this is');
    });

    it('should limit chars with an ellipse', () => {
      const assert = limitChars('this is something', 7, '...');

      expect(assert).toBe('this is ...');
    });
  });

  describe('limitWords', () => {
    it('should limit words', () => {
      const assert1 = limitWords('this is something else', 2);
      const assert2 = limitWords('this is something else', 3);

      expect(assert1).toBe('this is');
      expect(assert2).toBe('this is something');
    });

    it('should limit words with an ellipse', () => {
      const assert1 = limitWords('this is something', 2, '...');
      const assert2 = limitWords('this is something', 3, '...');

      expect(assert1).toBe('this is ...');
      expect(assert2).toBe('this is something ...');
    });
  });

  describe('pascalCase', () => {
    it('should return the correct PascalCasing of a string', () => {
      const assert1 = pascalCase('first word second word');
      const assert2 = pascalCase('this is a test');
      const assert3 = pascalCase('you are just 1 person');

      expect(assert1).toBe('FirstWordSecondWord');
      expect(assert2).toBe('ThisIsATest');
      expect(assert3).toBe('YouAreJust1Person');
    });
  });

  describe('removeWhitespace', () => {
    it('should return a string without extra whitespace', () => {
      const assert1 = removeWhitespace(' this has    extra     whitespace ');
      const assert2 = removeWhitespace('    this has        extra whitespace     ');

      expect(assert1).toBe('this has extra whitespace');
      expect(assert2).toBe('this has extra whitespace');
    });
  });

  describe('revertCamelCase', () => {
    it('should return a camelCased string as a normal lowercased string', () => {
      const assert1 = revertCamelCase('firstWordSecondWord');
      const assert2 = revertCamelCase('thisIsATest');
      const assert3 = revertCamelCase('youAreJust1Person');

      expect(assert1).toBe('first word second word');
      expect(assert2).toBe('this is a test');
      expect(assert3).toBe('you are just 1 person');
    });
  });

  describe('revertKebabCase', () => {
    it('should return a kebab-cased string as a normal lowercased string', () => {
      const assert1 = revertKebabCase('first-word-second-word');
      const assert2 = revertKebabCase('this-is-a-test');
      const assert3 = revertKebabCase('you-are-just-1-person');

      expect(assert1).toBe('first word second word');
      expect(assert2).toBe('this is a test');
      expect(assert3).toBe('you are just 1 person');
    });
  });

  describe('revertPascalCase', () => {
    it('should return a PascalCased string as a normal lowercased string', () => {
      const assert1 = revertPascalCase('FirstWordSecondWord');
      const assert2 = revertPascalCase('ThisIsATest');
      const assert3 = revertPascalCase('YouAreJust1Person');

      expect(assert1).toBe('first word second word');
      expect(assert2).toBe('this is a test');
      expect(assert3).toBe('you are just 1 person');
    });
  });

  describe('revertSnakeCase', () => {
    it('should return a snake_cased string as a normal lowercased string', () => {
      const assert1 = revertSnakeCase('first_word_second_word');
      const assert2 = revertSnakeCase('this_is_a_test');
      const assert3 = revertSnakeCase('you_are_just_1_person');

      expect(assert1).toBe('first word second word');
      expect(assert2).toBe('this is a test');
      expect(assert3).toBe('you are just 1 person');
    });
  });

  describe('snakeCase', () => {
    it('should return the correct snake_casing of a string', () => {
      const assert1 = snakeCase('first word second word');
      const assert2 = snakeCase('this is a test');
      const assert3 = snakeCase('you are just 1 person');

      expect(assert1).toBe('first_word_second_word');
      expect(assert2).toBe('this_is_a_test');
      expect(assert3).toBe('you_are_just_1_person');
    });
  });

  describe('titleCase', () => {
    it('should return the correct Title Casing of a string', () => {
      const assert1 = titleCase('first word second word');
      const assert2 = titleCase('this is a test');
      const assert3 = titleCase('a');
      const assert4 = titleCase('you are just 1 person');

      expect(assert1).toBe('First Word Second Word');
      expect(assert2).toBe('This Is A Test');
      expect(assert3).toBe('A');
      expect(assert4).toBe('You Are Just 1 Person');
    });
  });
});
