import encodedTsvArrayToTsvArray from './decode-tsv-array/index.module'
import fetchTsv from './fetch-tsv/index.module'
import flip2DArray from './flip-2D-array/index.module'
import SheetBase, { SheetBaseValue } from './SheetBase/index.module'
import SheetBaseCollection, { SheetBaseCollectionValue, SheetBaseCollectionDescriptor } from './SheetBaseCollection/index.module'
import SheetBaseEntry, { SheetBaseEntryValue, SheetBaseEntryDescriptor } from './SheetBaseEntry/index.module'
import SheetBaseField, { SheetBaseFieldValue, SheetBaseFieldDescriptor } from './SheetBaseField/index.module'
import tsvArrayToCollectionsArray, { CollectionArray } from './tsv-array-to-collections-array/index.module'
import tsvTo2DArray from './tsv-to-2D-array/index.module'
import tsvToEncoded from './encode-tsv/index.module'
import tsvToSheetBase from './tsv-to-sheet-base/index.module'
import tsvUrlToSheetBase from './tsv-url-to-sheet-base/index.module'

// [WIP] This component relies on a preact component that used
// to exist in lm-app but is no longer available here. See ./SheetBaseField
console.error('This module is broken.')

export type {
  SheetBaseValue,
  SheetBaseCollectionValue,
  SheetBaseCollectionDescriptor,
  SheetBaseEntryValue,
  SheetBaseEntryDescriptor,
  SheetBaseFieldValue,
  SheetBaseFieldDescriptor,
  CollectionArray
}

export {
  encodedTsvArrayToTsvArray,
  fetchTsv,
  flip2DArray,
  SheetBase,
  SheetBaseCollection,
  SheetBaseEntry,
  SheetBaseField,
  tsvArrayToCollectionsArray,
  tsvTo2DArray,
  tsvToEncoded,
  tsvToSheetBase,
  tsvUrlToSheetBase
}

export default tsvUrlToSheetBase
