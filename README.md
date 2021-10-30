![strand_logo](https://user-images.githubusercontent.com/3519112/125224403-91de3800-e29b-11eb-848c-b6a620f04a8e.png)

# What is Strand?

Talk about what Strand is here

## How to install

With NPM use

```
npm install @strand
```

Or Yarn

```
yarn add @strand
```

## How to use

There are two ways of using strand, either by a single method or using the 'chain' method to string together as many methods as you'd like.

### The chain method

```
import { chain } from '@strand';

const string1 = chain('Some random String').snakeCase().get().toLowerCase();
// 'some_random_string'

const string2 = chain('SOME RANDOM STRING').titleCase().kebabCase().get()
// 'Some-Random-String'
```

Chaining methods like this is meant to be similar to using the javascript string prototype chain without needing to extend it directly. You can chain as many methods as you'd like to the original string and when you're done just call the `get()` method to return your newly formatted string. Afterwards you're free to add any native string methods to it.

### Single methods

```
import { snakeCase, titleCase } from '@strand';

const string1 = snakeCase('Some random String').toLowerCase();
// 'some_random_string'

const string2 = titleCase('SOME RANDOM STRING');
// 'Some Random String'
```

### Available Methods

| Method           | Description                                 |
| :--------------- | :------------------------------------------ |
| camelCase        | camelCase                                   |
| kebabCase        | kebab-case                                  |
| limitChars       | limits the number of characters in a string |
| limitWords       | limits the number of words in a string      |
| pascalCase       | PascalCase                                  |
| removeWhitespace | trims excess whitespace from entire string  |
| revertCamelCase  | camelCase -> camel case                     |
| revertKebabCase  | kebab-case -> kebab case                    |
| revertPascalCase | PascalCase -> Pascal Case                   |
| revertSnakeCase  | snake_case -> snake case                    |
| snakeCase        | snake_case                                  |
| titleCase        | Title Case                                  |
