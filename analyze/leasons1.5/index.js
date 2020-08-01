let algo = {}

/* Time Complexity 1.5.1 */

algo.concatNum = (n) => {
  let s;

  for (let i = 0; i < n; i = i + 2) { //n+1/2
    s = i+1; //n
  }

  return s
}

/*
 Time complexity:  f(n) = n(n+1)/2 
*/


algo.concatJNum = (n) => {
  let s = 0;

  for (let i = 0; i < n; i++) { //n+1
    for (let j = 0; j < i; j++) { // n(n+1)
        s += j; //n
    }
  }

  return s
}

/*
  Time complexity:  f(n) = nˆ2+2n+1
*/


/* Time Complexity 1.5.2 */

algo.multiplyForTwo = (n) => {
  let s = 0;

  for (let i = 0; i < n; i = i*2 ) {
    s += i;
  }

  return s
}
/*
  Time complexity:
  i >= n   --> it's when we will stop the loop
  i = 2ˆk
  2ˆk >= n
  2ˆk = n
  k = Log_2N

*/


module.exports = algo
