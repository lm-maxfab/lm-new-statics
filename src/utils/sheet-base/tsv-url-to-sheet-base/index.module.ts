import SheetBase from '../SheetBase/index.module.js'
import fetchTsv from '../fetch-tsv/index.module.js'
import tsvToSheetBase from '../tsv-to-sheet-base/index.module.js'

async function tsvUrlToSheetBase (url: string): Promise<SheetBase> {
  const tsvBase = await fetchTsv(url)
  const sheetBase = tsvToSheetBase(tsvBase)
  return sheetBase
}

export default tsvUrlToSheetBase
