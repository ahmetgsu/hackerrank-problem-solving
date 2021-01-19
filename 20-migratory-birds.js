// arr: an array of integers representing types of birds sighted
function migratoryBirds(arr) {
  let array = []
  let maxLength = 0
  let birdType
  ;[1, 2, 3, 4, 5].forEach((elem) => {
    let arry = arr.filter((i) => i === elem)
    let length = arry.length
    if (length > maxLength) {
      maxLength = length
      birdType = elem
    } else if (length === maxLength) {
      if (elem < birdType) {
        birdType = elem
      }
    }

    array.push({ value: elem, amount: length })
  })
  let newArray = array.filter((k) => k.amount === maxLength)
  let output = newArray[0].value
  if (newArray.length > 1) {
    output = newArray.find((a) => a.value === birdType).value
  }

  return output
}

k = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
migratoryBirds(k)
