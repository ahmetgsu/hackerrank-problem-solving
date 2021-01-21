function bonAppetit(bill, k, b) {
  let msg = 'Bon Appetit'
  let total = 0
  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      total += bill[i]
    }
  }
  let current = total / 2
  console.log('bonAppetit -> current', current)
  if (b - current === 0) {
    console.log('bonAppetit -> msg', msg)
  } else {
    console.log('bonAppetit -> b - current', b - current)
  }
}

let bill = [3, 10, 2, 9]
let k = 1
let b = 12

bonAppetit(bill, k, b)
