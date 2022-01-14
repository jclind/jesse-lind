export const wordCounter = text => {
  let wordCount = text.match(/(\w+)/g).length
  return wordCount
}
