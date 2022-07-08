const sum = require("./sample.js");

test('should add two numbers together', () => {
  expect(sum(1,2)).toBe(3);
});