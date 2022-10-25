import { html, render } from '../../lib/esm/htm/v3.1.1/preact/typed.standalone.module.js'
import SomeHTMComponent from './index.module.js'

const targetNode = document.querySelector('#root')
render(html`<${SomeHTMComponent} />`, targetNode)
