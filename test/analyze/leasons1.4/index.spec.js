const algo = require('../../../analyze/leasons1.4');

test('swap a and b value', () => {
  expect(algo.swap(1, 2)).toBe("2, 1");
});

test('sum of all values in this array should be 29', () => {
  let a = [8,3,9,7,2]
  let n = 5
  expect(algo.sum(a, n)).toBe(29)
})

test('add the sum of arrays in another arrya', () => {
  let a = [1,2,3]
  let b = [1,2,3]
  let n = 3
  let expected = [2,4,6]
  expect(algo.add(a, b, 3)).toEqual(expect.arrayContaining(expected))
})