function tsvToEncodedTsv (tsv: string): string {
  let returned = tsv
  const tsvComplexCellOpeningRegex = /(\t|\n)"/gm
  const tsvComplexCellOpeningTag = '<<<CELL>>>'
  const tsvComplexCellOpeningTransform = (match: string): string => `${match[0]}${tsvComplexCellOpeningTag}`
  const tsvComplexCellClosingRegex = /"(\t|\n)/gm
  const tsvComplexCellClosingTag = '<<</CELL>>>'
  const tsvComplexCellClosingTransform = (match: string): string => `${tsvComplexCellClosingTag}${match[match.length - 1]}`
  returned = returned.replace(tsvComplexCellOpeningRegex, tsvComplexCellOpeningTransform)
  returned = returned.replace(tsvComplexCellClosingRegex, tsvComplexCellClosingTransform)
  const tsvComplexCellClosingTagEscaped = tsvComplexCellClosingTag.replace(/\//gm, '\\/')
  const tsvComplexCellRegex = new RegExp(`${tsvComplexCellOpeningTag}[\\S\\s]*?${tsvComplexCellClosingTagEscaped}`, 'gm')
  const tsvComplexNonencCellEncoder = (match: string): string => {
    const inside = match
      .replace(tsvComplexCellOpeningTag, '')
      .replace(tsvComplexCellClosingTag, '')
      .replace(/("")+/gm, (match: string): string => {
        const length: number = Math.floor(match.length / 2)
        const returned: string = new Array(length).fill('"').join('')
        return returned
      })
    const { btoa, unescape, encodeURIComponent: encode } = window
    const encInside = btoa(unescape(encode(inside)))
    return tsvComplexCellOpeningTag + encInside + tsvComplexCellClosingTag
  }
  returned = returned.replace(tsvComplexCellRegex, tsvComplexNonencCellEncoder)
  return returned
}

export default tsvToEncodedTsv
