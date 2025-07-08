const sum = require("./app").sum;
const multiply = require("./app").multiply;
const divide = require("./app").divide;

test("add two numbers", () => {
  expect(sum(3, 5)).toBe(8);
});

test("multiply two numbers", () =>{
  expect(multiply(3,5)).toBe(15);
});

test("divide two valid numbers", () =>{
  expect(divide(10,2).toBe(5));
});

test("divide two invalid numbers",()=>{
  expect(divide(10,0).toBe("Error cannot divide by 0"));
});