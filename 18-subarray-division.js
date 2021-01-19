console.time()
function birthday(s, d, m) {
  let count = recursive(s, d, m)
  return count
}
const recursive = (s, d, m) => {
  let [counter, i] = [0, 0]
  const incrementCounter = () => {
    counter++
    i++
  }
  const incrementIndex = () => i++

  const iter = () => {
    let subArray = s.slice(i, m + i)
    if (subArray.length >= m) {
      let total = subArray.reduce((t, c) => t + c, 0)
      total === d ? incrementCounter() : incrementIndex()
      return iter()
    } else {
      return counter
    }
  }
  return iter()
}

console.timeEnd()

// const s = [1, 2, 1, 3, 2]
// const d = 3
// const m = 2
const s = [4]
const d = 4
const m = 1

birthday(s, d, m)

// 1 <= n <= 100
// 1 <= s[i] <= 5
// 1 <= d <= 31
// 1 <= m <= 12
