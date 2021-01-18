console.time()
function divisibleSumPairs(n, k, ar) {
  let count = 0
  const recursive = () => {
    if (ar.length > 0) {
      const first = ar.shift()
      ar.forEach((e) => {
        if ((first + e) % k === 0) {
          count++
        }
      })
      return recursive()
    } else {
      return count
    }
  }
  return recursive()
}

console.timeEnd()

const n = 6
const k = 3
const ar = [1, 3, 2, 6, 1, 2]

divisibleSumPairs(n, k, ar)

// int n: the length of array
// int k: the integer divisor
// int ar[n]: an array of integers

// 2 <= n <= 100
// 1 <= ar[i] <= 100
// 1 <= k <= 100
