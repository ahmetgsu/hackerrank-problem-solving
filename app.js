function divisibleSumPairs(k, ar) {
  console.time('divisibleSumPairs')
  console.log('divisibleSumPairs -> ar', ar)
  console.log('divisibleSumPairs -> k', k)
  let count = 0
  const recursive = () => {
    if (ar.length > 1) {
      const first = ar.shift()
      for (let i = 0; i < ar.length; i++) {
        if ((first + ar[i]) % k === 0) {
          count++
        }
      }
      // ar.forEach((e) => {
      //   if ((first + e) % k === 0) {
      //     count++
      //   }
      // })
      return recursive()
    } else {
      console.log('divisibleSumPairs -> count', count)
      return count
    }
  }
  console.timeEnd('divisibleSumPairs')
  return recursive()
}

// const n = 2
// const k = 3
// // const ar = [1, 3, 2, 6, 1, 2]
// const ar = [1, 2]

// divisibleSumPairs(k, ar)

// int n: the length of array
// int k: the integer divisor
// int ar[n]: an array of integers

// 2 <= n <= 100
// 1 <= ar[i] <= 100
// 1 <= k <= 100

const nProducer = () => {
  // let n = Math.floor(Math.random() * 10) + 2
  let n = 2000
  // console.log('nProducer -> n', n)
  // if (n > 20) {
  //   n = 20
  // }
  return n
}
const kProducer = () => {
  let k = Math.floor(Math.random() * 100) + 1
  if (k > 100) {
    k = 100
  }
  return k
}
const arProducer = (n = nProducer()) => {
  let ar = []
  for (let i = 0; i < n; i++) {
    // ar.push(kProducer())
    ar = [...ar, kProducer()]
  }
  return ar
}
let k = kProducer()
let ar = arProducer()

divisibleSumPairs(k, ar)
// nProducer()
// kProducer()
// arrayProducer()
