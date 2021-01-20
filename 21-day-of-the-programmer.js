function dayOfProgrammer(year) {
  let [day, month] = ['13', '09']
  if (year < 1918) {
    let isLeapYear = checkLeapYear(year, 'before')
    if (isLeapYear) {
      day = '12'
    }
  } else if (year == 1918) {
    day = '26'
  } else {
    let isLeapYear = checkLeapYear(year, 'after')
    if (isLeapYear) {
      day = '12'
    }
  }
  const exactDate = `${day}.${month}.${year.toString()}`
  return exactDate
}

const checkLeapYear = (y, period) => {
  let isLeapYear = false
  if (period === 'before') {
    if (y % 4 === 0) {
      isLeapYear = true
    }
  } else {
    if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
      isLeapYear = true
    }
  }
  return isLeapYear
}

dayOfProgrammer(2600)
