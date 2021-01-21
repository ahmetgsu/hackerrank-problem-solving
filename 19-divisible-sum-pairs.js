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
/*

function divisibleSumPairs(k, ar) {
  console.time('divisibleSumPairs - 40000')
  let count = 0
  let j = 0
  while (j < ar.length) {
    let first = ar[j]
    let slice = ar.slice(j + 1)
    for (let i = 0; i < slice.length - 1; i++) {
      if ((first + slice[i]) % k === 0) {
        count++
      }
    }
    j++
  }
  console.timeEnd('divisibleSumPairs - 40000')
  return count
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
  let n = 40000
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
const arProducer = (n) => {
  let ar = []
  for (let i = 0; i < n; i++) {
    // ar.push(kProducer())
    ar = [...ar, kProducer()]
  }
  return ar
}
const length = nProducer()
const k0 = kProducer()
// const k1 = kProducer()
// const k2 = kProducer()
// const k3 = kProducer()
// const k4 = kProducer()
// const k5 = kProducer()
// const k6 = kProducer()
// const k7 = kProducer()
// const k8 = kProducer()
// const k9 = kProducer()
const ar0 = arProducer(length)
// const ar1 = arProducer()
// const ar2 = arProducer()
// const ar3 = arProducer()
// const ar4 = arProducer()
// const ar5 = arProducer()
// const ar6 = arProducer()
// const ar7 = arProducer()
// const ar8 = arProducer()
// const ar9 = arProducer()

divisibleSumPairs(k0, ar0)
// divisibleSumPairs(k1, ar1)
// divisibleSumPairs(k2, ar2)
// divisibleSumPairs(k3, ar3)
// divisibleSumPairs(k4, ar4)
// divisibleSumPairs(k5, ar5)
// divisibleSumPairs(k6, ar6)
// divisibleSumPairs(k7, ar7)
// divisibleSumPairs(k8, ar8)
// divisibleSumPairs(k9, ar9)
// nProducer()
// kProducer()
// arrayProducer()

// const recursive = () => {
//   if (ar.length > 1) {
//     const first = ar.shift()
//     for (let i = 0; i < ar.length; i++) {
//       if ((first + ar[i]) % k === 0) {
//         count++
//       }
//     }
//     // ar.forEach((e) => {
//     //   if ((first + e) % k === 0) {
//     //     count++
//     //   }
//     // })
//     return recursive()
//   } else {
//     console.log('divisibleSumPairs -> count', count)
//     return count
//   }
// }

*/
