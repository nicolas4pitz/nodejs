
const { soma, ehPar, inverterString } = require('./utils');

test("1 + 2 = 3", () => {
  expect(soma(1, 2)).toBe(3)
})

test("0 + 0 = 0", () => {
  expect(soma(0, 0)).toBe(0)
})

test("-1 + 1 = 0", () => {
  expect(soma(-1, 1)).toBe(0)
})

test("2 é par", () => {
  const num = ehPar(2)
  expect(num).toBeTruthy();
})

test("3 é impar", () => {
  const num = ehPar(3)
  expect(num).toBeFalsy();
})

test("0 é par", () => {
  const num = ehPar(0)
  expect(num).toBeTruthy();
})

test("jest é tsej", () => {
  expect(inverterString("jest")).toMatch("tsej");
})

test("'' é ''", () => {
  expect(inverterString("")).toMatch("");
})

test("a é a", () => {
  expect(inverterString("a")).toMatch("a");
})