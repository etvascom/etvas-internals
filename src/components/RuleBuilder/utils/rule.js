export const getRuleDetails = ({ type, ...rule }) => {
  const operatorKey = `${type}Operator`
  const valueKey = `${type}Value`

  return {
    type,
    operator: rule[operatorKey],
    value: rule[valueKey],
    operatorKey,
    valueKey
  }
}
