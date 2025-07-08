const sum = require("./app").sum;

test("add two numbers", () => {
  expect(sum(3, 5)).toBe(8);
});

const multiply = require("./app").multiply;

test("multiplys two numbers", () => {
  expect(multiply(3, 5)).toBe(15);
});

const divide = require("./app").divide;

test("divides two numbers", () => {
  expect(divide(10, 5)).toBe(2);
});