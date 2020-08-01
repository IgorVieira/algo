const algo = require('../../../algo/rank1.1');

test('should return area and perimeter', () => {
  let EXPECTED_VALUE = {
    "area": 21.237166338267002,
    "perimeter": 16.336281798666924
  }

  let INPUT_VALUE = 2.6

  expect(algo.handleMetrics(INPUT_VALUE)).toEqual(EXPECTED_VALUE)
});

test('should replace consonants for vowels and concat with consonants', () => {
  let EXPECTED_VALUE = "a\n"+
  "a\n"+
  "i\n"+
  "o\n"+
  "o\n"+
  "j\n"+
  "v\n"+
  "s\n"+
  "c\n"+
  "r\n"+
  "p\n"+
  "t\n"+
  "l\n"+
  "p"

  let INPUT_VALUE = 'javascriptloop'

  expect(algo.vowelsAndConsonants(INPUT_VALUE)).toEqual(EXPECTED_VALUE)
})