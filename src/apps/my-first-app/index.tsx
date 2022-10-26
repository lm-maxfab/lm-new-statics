import { h, Fragment, render } from '../../lib/preact/v10.11.2/typed.index.js'
import SomeHTMComponent from '../../components/some-htm-component/index.module.js'
import SomePreactComp from '../../components/some-preact-component/index.js'
;import SomeHTMClassComponent from '../../components/some-htm-class-component/index.js';
(h);(Fragment)

const targetNode = document.querySelector('#root')

const App = () => <div className="MyApp">
  <SomeHTMComponent />
  <SomeHTMClassComponent />
  <SomePreactComp />
</div>

if (targetNode !== null) render(<App />, targetNode)
