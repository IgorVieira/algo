let algo = {}
// 1.4
// Analyse Algoritm
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

// 1.5
// Frequency count method

algo.sum = (a, n) => {
  let s = 0                       // 1
  for (let i = 0; i < n; i++) {   // n+1
    s = s+a[i]                    // n
  }

  return s                        // 1
                                  // _____
                                  // f(n) 2n+3
}

/*
  Space:
  s = 1
  i = 1
  a = 1
  n = n

  Space: S(n) = n+3

  Time Function: F(n) = 2n + 3
*/



algo.add = (a, b, n) => {
  let c = []
  
  for (let i = 0; i < n; i++) {        // n+1
    for (let j = 0; j < n; j++) {      // n x (n+1)
      c[i,j] = a[i,j] + b[i,j]         // n x n 
    }
  }

  return c
}


/*
  Space:
  A - n²
  B - n²
  C - n²
  I - 1
  J - 1
  N - 1

  S(n) = 3n² + 3

  Time Function:

  F(n) = 2n² + 2n + 1

*/




module.exports = algo
