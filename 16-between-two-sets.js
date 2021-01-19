console.time()
function getTotalX(a, b) {
  let num = [a[0]]
  if (a.length >= 2) {
    num = recursive(a)
  }
  let number = num.reduce((t, c) => t * c, 1)
  let array = []
  let counter = 0
  for (let i = 1; i < Math.min(...b) + 1; i++) {
    array.push(i * number)
  }
  array.forEach((i) => {
    let bool = b.every((e) => e % i === 0)
    bool ? counter++ : null
  })
  return counter
}
console.timeEnd()
const recursive = (a) => {
  const arr = []
  const iter = (a) => {
    const first = a.shift()
    arr.push(first)
    a.forEach((e, i) => {
      if (e % first === 0) {
        a[i] = e / first
      }
    })
    if (a.length === 1) arr.push(...a)
    return a.length === 1 ? arr : iter(a)
  }
  return iter(a)
}

let a = [2, 3, 48, 96]
let b = [96]
getTotalX(a, b)
