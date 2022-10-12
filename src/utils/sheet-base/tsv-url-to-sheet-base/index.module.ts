import SheetBase from '../SheetBase/index.module'
import fetchTsv from '../fetch-tsv/index.module'
import tsvToSheetBase from '../tsv-to-sheet-base/index.module'

async function tsvUrlToSheetBase (url: string): Promise<SheetBase> {
  const tsvBase = await fetchTsv(url)
  const sheetBase = tsvToSheetBase(tsvBase)
  return sheetBase
}

export default tsvUrlToSheetBase
