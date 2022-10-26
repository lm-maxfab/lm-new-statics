import { html } from "../../lib/htm/v3.1.1/typed.index.js";
import { Component } from "../../lib/preact/v10.11.2/typed.index.js";

export default class SomeHTMClassComponent extends Component<{}, {}> {
  render () {
    return html`<div>I am a class HTM component.</div>`
  }
}
