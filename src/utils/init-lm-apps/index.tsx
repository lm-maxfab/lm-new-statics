import { h, Fragment } from '../../lib/preact/v10.11.2/typed.index.js'
import fetchSheetBase from '../fetch-sheet-base/index.module.js'
import injectCss from '../inject-css/index.module.js'
import readLmPropsNode from '../read-lm-props-node/index.module.js'
import unknownObjToStr from '../unknown-obj-to-string/index.js'

;(h);(Fragment)

/* * * * * * * * * * * * * * * * * *
 *
 * Inject Styles
 * 
 * * * * * * * * * * * * * * * * * */
injectGenericStyles()
async function injectGenericStyles () {
  const currentPath = import.meta.url
  const currentDir = currentPath.split('/').slice(0, -1).join('/')
  try {
    await injectCss([
      `${currentDir}/../../styles/reset.css`,
      `${currentDir}/../../styles/fonts.css`,
      `${currentDir}/../../styles/variables.css`
    ]).then(res => {
      if (res === true) return
      throw new Error(`Files did not load:\n${res.details.join('\n')}`)
    })
  } catch (err) {
    console.warn(`Something went wrong while injecting css`)
    console.warn(unknownObjToStr(err))
  }
}

/* * * * * * * * * * * * * * * * * *
 *
 * Render Nodes
 * 
 * * * * * * * * * * * * * * * * * */
const $appsRoots = [...document.querySelectorAll('div.lm-app-root')] as HTMLDivElement[]
$appsRoots.forEach(initAppFromRoot)
async function initAppFromRoot ($root: HTMLDivElement) {
  const propsNode = $root.querySelector('data.lm-app-props') as HTMLDataElement|null
  const sheetbasesUrlsNode = $root.querySelector('data.lm-app-sheets') as HTMLDataElement|null
  const env = $root.dataset.env ?? 'production'
  const context = $root.dataset.context // [WIP] inject correct styles depending on context here

  // Read props
  let props = {}
  if (sheetbasesUrlsNode !== null) {
    const sheetbasesUrls = readLmPropsNode(sheetbasesUrlsNode)
    const sheetbaseUrl = sheetbasesUrls[env] as string|undefined
    if (sheetbaseUrl !== undefined && sheetbaseUrl !== '') {
      const sheetbase = await fetchSheetBase(sheetbaseUrl)
      if (sheetbase !== undefined) { props = { ...sheetbase.value } }
    }
  } else if (propsNode !== null) { props = { ...readLmPropsNode(propsNode) } }

  // Load and fire renderer
  try {
    const name = $root.dataset.app
    const compPath = `../../apps/${name}/index.js`
    const compExports = await import(compPath) as any
    const compDefaultExports = compExports.default
    const renderer = compDefaultExports as (props: any, $root: HTMLElement) => void
    $root.innerHTML = ''
    renderer(props, $root)
  } catch (err) {
    return console.warn(`Could not find any app named ${name}`)
  }
}

export {}
