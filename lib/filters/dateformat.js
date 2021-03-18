module.exports.ymd = (date, separator = '-') => (
  date instanceof Date
    ? `${date.getUTCFullYear()}${separator}${String(date.getUTCMonth() + 1).padStart(2, '0')}${separator}${String(date.getUTCDate()).padStart(2, '0')}`
    : ''
)

module.exports.year = date => (
  date instanceof Date
    ? `${date.getUTCFullYear()}`
    : ''
)
