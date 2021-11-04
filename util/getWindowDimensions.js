export const getWindowWidth = () => {
  if (typeof window !== 'undefined') {
    return document.body.clientWidth
  }
  return 0
}
