const sortFunctions = {
  string: (a, b) => a.localeCompare(b),
  number: (a, b) => (a === b ? 0 : a > b ? 1 : -1),
  boolean: (a, b) => !!a - !!b,
  currency: (a, b) => {
    const ca = parseFloat(a.replace(/€/g, ''))
    const cb = parseFloat(b.replace(/€/g, ''))
    return ca === cb ? 0 : ca > cb ? 1 : -1
  },
  default: (a, b) => `${a}`.localeCompare(`${b}`)
}

const checkSortParameters = (a, b) => {
  if (a === undefined || a === null) {
    return -1
  }
  if (b === undefined || b === null) {
    return 1
  }
  return false
}

const detectSortingType = value => {
  if (typeof value === 'string') {
    return 'string'
  }
  if (typeof value === 'number') {
    return 'number'
  }
  if (typeof value === 'boolean') {
    return 'boolean'
  }
  if (value.indexOf('€') >= 0) {
    return 'currency'
  }
  return 'default'
}

export const doSort = (a, b) => {
  const check = checkSortParameters(a, b)
  if (check) {
    return check
  }
  const type = detectSortingType(a)
  return sortFunctions[type](a, b)
}
