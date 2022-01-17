export const wordCounter = text => {
  if (text) {
    let wordCount = text.match(/(\w+)/g).length
    return wordCount
  }
  return 0
}
