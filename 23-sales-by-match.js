function sockMerchant(n, ar) {
  let array = ar
  let [i, pair, length] = [0, 0, 0]

  while (i < n) {
    if (length < n) {
      let newArr = array.filter((e) => e === ar[i])
      if (newArr.length > 1) {
        pair += Math.floor(newArr.length / 2)
      }
      length = newArr.length
      array = array.filter((e) => e !== ar[i])
      i++
    } else {
      break
    }
  }
  return pair
}

let num = 9
let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]

sockMerchant(num, arr)
