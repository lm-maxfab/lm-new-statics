import { html } from '../../lib/esm/htm/v3.1.1/preact/typed.standalone.module.js'
import dayjs from '../../lib/esm/dayjs/v1.11.5/index.js'

export default function SomeHTMComponent (_props: any) {
  console.log(dayjs)
  return html`<div>
    I am a HTM component.
  </div>`
}
