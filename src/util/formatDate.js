export const formatDate = date => {
  const month = numToShortMonth(date.getMonth())
  const day = date.getDate()
  const year = date.getFullYear()

  return `${month} ${day} ${year}`
}

export const numToShortMonth = month => {
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

  return shortMonths[month]
}

export const numToLongMonth = month => {
  const longMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return longMonths[month]
}
