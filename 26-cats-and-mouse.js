function catAndMouse(x, y, z) {
  let winner
  let gapA = Math.abs(x - z)
  let gapB = Math.abs(y - z)
  if (gapA < gapB) {
    winner = 'Cat A'
  }
  if (gapA === gapB) {
    winner = 'Mouse C'
  }
  if (gapA > gapB) {
    winner = 'Cat B'
  }
  return winner
}

const randomNumber = () => {
  let number = Math.floor(Math.random() * 99) + 1
  return number
}

let num1 = randomNumber()
let num2 = randomNumber()
let num3 = randomNumber()

catAndMouse(num1, num2, num3)
catAndMouse(5, 11, 8)
