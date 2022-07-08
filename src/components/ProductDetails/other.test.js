const sum = require("../../tests/sample.js");

test('should add two numbers together but be a different test', () => {
  expect(sum(1,2)).toBe(3);
});