const millisecondsStr = ['ms', 'millis', 'millisecond', 'milliseconds']
const secondsStr = ['s', 'sec', 'secs', 'second', 'seconds']
const minutesStr = ['m', 'min', 'mins', 'minute', 'minutes']
const hoursStr = ['h', 'hr', 'hrs', 'hour', 'hours']
const daysStr = ['d', 'dy', 'dys', 'day', 'days']
const weeksStr = ['w', 'wk', 'wks', 'week', 'weeks']
const monthsStr = ['mo', 'mon', 'mons', 'month', 'months']
const yearsStr = ['y', 'yr', 'yrs', 'year', 'years']
const allDurationsStr = [
  ...millisecondsStr,
  ...secondsStr,
  ...minutesStr,
  ...hoursStr,
  ...daysStr,
  ...weeksStr,
  ...monthsStr,
  ...yearsStr
]

export default function durationStrToMillis (_str: string): number {
  const strs = _str
    .split(',')
    .map(e => e
      .toLowerCase()
      .trim()
      .replace(/\s/igm, ''))

  if (strs.length > 1) return strs.reduce((acc, curr) => {
    return acc + durationStrToMillis(curr)
  }, 0)

  const str = strs[0]
  const strValue = (str.match(/^[0-9]*(.[0-9]+)?/) ?? [''])[0]
  const rawUnit = (str.match(new RegExp(`(${allDurationsStr.join('|')})$`)) ?? [''])[0]
  if (strValue === '') return 0
  const value = parseFloat(strValue)
  if (millisecondsStr.includes(rawUnit)) return value
  if (secondsStr.includes(rawUnit)) return value * 1000
  if (minutesStr.includes(rawUnit)) return value * 60 * 1000
  if (hoursStr.includes(rawUnit)) return value * 60 * 60 * 1000
  if (daysStr.includes(rawUnit)) return value * 24 * 60 * 60 * 1000
  if (weeksStr.includes(rawUnit)) return value * 7 * 24 * 60 * 60 * 1000
  if (monthsStr.includes(rawUnit)) return value * 30 * 24 * 60 * 60 * 1000
  if (yearsStr.includes(rawUnit)) return value * 365 * 24 * 60 * 60 * 1000
  return value
}
