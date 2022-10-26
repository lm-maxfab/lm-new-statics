import typedHtm from 'htm'
import { VNode } from 'preact'
import { createElement } from '../../preact/v10.11.2/typed.index.js'
import untypedHtm from './index.js'

const htm = untypedHtm as typeof typedHtm
const _html = htm.bind(createElement)

function html (strings: TemplateStringsArray, ...values: any[]): VNode<any>|VNode<any>[] {
  return _html(strings, ...values)
}

export default htm
export { html }
