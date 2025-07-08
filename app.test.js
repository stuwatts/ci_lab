const { multiply,sum } = require("./app");

test("add two numbers", () => {
  expect(sum(3, 5)).toBe(8);
});

test("multiply two numbers", () =>{
  expect(multiply(3,5)).toBe(15);
});