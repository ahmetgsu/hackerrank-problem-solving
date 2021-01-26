function getMoneySpent(keyboards, drives, b) {
  let number = -1
  for (const e of keyboards) {
    for (const i of drives) {
      if (e + i <= b) {
        if (number <= e + i) {
          number = e + i
        }
      }
    }
  }
  return number
}
