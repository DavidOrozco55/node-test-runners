const { describe, it } = require('node:test');
const assert = require('assert');
const { sum, multiply } = require('../../index.js');

describe('Math Operations', () => {
  describe('sum', () => {
    it('should return the sum of two numbers', () => {
      const result = sum(2, 3);
      assert.strictEqual(result, 5);
    });

    it('should handle negative numbers', () => {
      const result = sum(-2, -3);
      assert.strictEqual(result, -5);
    });

    it('should return 0 when one of the operands is 0', () => {
      const result1 = sum(0, 5);
      const result2 = sum(-3, 0);
      assert.strictEqual(result1, 5);
      assert.strictEqual(result2, -3);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      const result = multiply(2, 3);
      assert.strictEqual(result, 6);
    });

    it('should handle negative numbers', () => {
      const result = multiply(-2, 3);
      assert.strictEqual(result, -6);
    });

    it('should return 0 when one of the operands is 0', () => {
      const result1 = multiply(0, 5);
      const result2 = multiply(-3, 0);
      assert.strictEqual(result1, 0);
      assert.strictEqual(result2, 0);
    });
  });
});