import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};

export default config;
