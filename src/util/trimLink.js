export const trimLink = url => {
  const urlTrim = url.replace(/(^\w+:|^)\/\//, '')
  const result = urlTrim.split('/')[0]
  return result
}
