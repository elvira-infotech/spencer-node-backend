export const nowUtcMinus5 = () => new Date(Date.now() - 5 * 60 * 60 * 1000)

// Returns UTC-5 month name and year
export const getUtcMinus5MonthYear = () => {
  const d = nowUtcMinus5()
  const month = d.toLocaleString('en-US', { month: 'long', timeZone: 'America/New_York' })
  const year = d.getFullYear()
  return { month, year }
}
