export const getWindowWidth = () => {
  if (typeof window !== 'undefined') {
    console.log('yo')

    return window.innerWidth
  }
  return 0
}
