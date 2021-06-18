import { test } from './index';

describe('test', () => {
  it('should return the correct string', () => {
    const assert = test('joey');

    expect(assert).toBe('joey is a string');
  });
});
