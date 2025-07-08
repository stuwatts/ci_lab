const sum = require("./app").sum;

test("add two numbers", () => {
  expect(sum(3, 5)).toBe(8);
});
const sum = require("./app").sum;

test("multiply two numbers", () => {
  expect(sum(3, 5)).toBe(15);
});