console.time()
function breakingRecords(scores) {
  const first = scores.shift()
  let [highest, lowest, highCounter, lowCounter] = [[first], [first], 0, 0]
  scores.forEach((e) => {
    const { highesth, lowesth, highCounterh, lowCounterh } = checkHighest(e, highest, lowest, highCounter, lowCounter)
    highest = [...highesth]
    lowest = [...lowesth]
    highCounter = highCounterh
    lowCounter = lowCounterh
  })
  console.log(highCounter, lowCounter)
}
const checkHighest = (e, highesth, lowesth, highCounterh, lowCounterh) => {
  if (e > highesth[highesth.length - 1]) {
    highesth.push(e)
    highCounterh++
    lowesth.push(lowesth[lowesth.length - 1])
  } else if (e < highesth[highesth.length - 1]) {
    const { lowestc, lowCounterc } = checkLowest(e, lowesth, lowCounterh)
    lowCounterh = lowCounterc
    lowesth = [...lowestc]
    highesth.push(highesth[highesth.length - 1])
  } else {
    highesth.push(highesth[highesth.length - 1])
    lowesth.push(lowesth[lowesth.length - 1])
  }
  return { highesth, lowesth, highCounterh, lowCounterh }
}

const checkLowest = (e, lowestc, lowCounterc) => {
  if (e > lowestc[lowestc.length - 1]) {
    lowestc.push(lowestc[lowestc.length - 1])
  } else if (e < lowestc[lowestc.length - 1]) {
    lowestc.push(e)
    lowCounterc++
  } else {
    lowestc.push(lowestc[lowestc.length - 1])
  }
  return { lowestc, lowCounterc }
}
console.timeEnd()

let scores = [10, 2, 21, 35, 7, 1, 11, 3, 48, 96]

breakingRecords(scores)
