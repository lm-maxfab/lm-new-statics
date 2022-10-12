function isFalsy (val: any): boolean {
  const nullishValues = [false, null, undefined, '', 0, -0, BigInt(0), NaN]
  return nullishValues.includes(val)
}

export default isFalsy
