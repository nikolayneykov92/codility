function solution(s) {
  const words = s.split(' ')
  let longestLength = -1

  for (const word of words) {
    let digitsCount = 0
    let lettersCount = 0

    for (const char of word) {
      let isNumber = Number.isInteger(+char)
      let isLetter = char.toLowerCase() !== char.toUpperCase()

      if (isNumber) {
        digitsCount++
      } else if (isLetter) {
        lettersCount++
      } else {
        digitsCount = 0
        lettersCount = 0
        break
      }
    }

    if (lettersCount % 2 === 0 && digitsCount % 2 === 1) {
      longestLength = Math.max(longestLength, word.length)
    }
  }

  return longestLength
}

console.log(solution('test 5 a0A pass007 ?xy1'))
