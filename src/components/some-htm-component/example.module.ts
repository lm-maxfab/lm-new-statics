import { html } from '../../lib/htm/v3.1.1/typed.index.js'
import { render } from '../../lib/preact/v10.11.2/typed.index.js'
import SomeHTMComponent from './index.module.js'

const targetNode = document.querySelector('#root')
if (targetNode !== null) render(html`<${SomeHTMComponent} />`, targetNode)
