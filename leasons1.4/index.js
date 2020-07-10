let algo = {}

algo.swap = (a, b) => {
  let time
  
  time = a;
  a = b;
  b = time

  return `${a}, ${b}`
}

/*
  Space: a + b + temp = S(n) = 3
  Time function: 
  temp = a -> 1 
  a = b    -> 1 
  b = temp -> 1 
  F(n) = 3

*/

module.exports = algo
