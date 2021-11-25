function solution(n) {
  let binaryGap = 0
  let maxBinaryGap = 0

  while (n % 2 === 0) {
    n = Math.trunc(n / 2)
  }

  while (n > 0) {
    if (n % 2 === 0) {
      binaryGap++
    } else {
      maxBinaryGap = Math.max(maxBinaryGap, binaryGap)
      binaryGap = 0
    }

    n = Math.trunc(n / 2)
  }

  return maxBinaryGap
}

console.log(solution(9)) // 2
console.log(solution(529)) // 4
console.log(solution(20)) // 1
console.log(solution(15)) // 0
console.log(solution(32)) // 0
console.log(solution(1041)) // 5
