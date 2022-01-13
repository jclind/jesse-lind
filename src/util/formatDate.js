export const formatDate = date => {
  const shortMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const month = shortMonths[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  return `${month} ${day} ${year}`
}
