
const algo = {}


/*
Objective

In this challenge, we practice declaring variables using the let and const keywords. Check out the attached tutorial for more details.

Task

1 - Declare a constant variable, , and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
2 - Read a number, , denoting the radius of a circle from stdin.
3 - Use  and  to calculate the  and  of a circle having radius .
4 - Print  as the first line of output and print  as the second line of output.

*/

algo.handleMetrics = (r) => {
  const PI = Math.PI
  
  let area = ( PI * r * r )
  let perimeter = 2 * PI * r

  return {
    area,
    perimeter
  }
}


/*
Objective

In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

Task

Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

1 - First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
2 - Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .


*/

algo.vowelsAndConsonants = (s) => {
  const vowels = 'aeiou';
  let list_consonants = '';
  let list_vowels = '';


  [...s].forEach(c => {
    if (vowels.includes(c)) {
      list_vowels += c + '\n'
    }
    else {
      list_consonants += c + '\n';
    }
  })
  
  return list_vowels.concat(list_consonants).trim()
}


module.exports = algo