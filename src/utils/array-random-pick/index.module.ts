export default function arrayRandomPick<Type> (arr: Type[], exclude: Type[] = []): Type|undefined {
  const filteredArr = [...arr].filter(elt => !exclude.includes(elt))
  const length = filteredArr.length
  const pos = Math.floor(Math.random() * length)
  return filteredArr[pos]
}
