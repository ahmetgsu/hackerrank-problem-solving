function pageCount(n, p) {
  let numOfPages = 0
  let pagesFromEnd = n === 2 || (n % 2 === 0 && n - p === 1) ? n - p : Math.floor((n - p) / 2)
  let pagesFromStart = Math.ceil((p - 1) / 2)
  if (pagesFromEnd > pagesFromStart) {
    numOfPages = pagesFromStart
  }
  if (pagesFromEnd === pagesFromStart) {
    numOfPages = pagesFromStart
  }
  if (pagesFromEnd < pagesFromStart) {
    numOfPages = pagesFromEnd
  }
  return numOfPages
}
let [num, page] = [6, 5]

pageCount(num, page)
