import { h, Fragment, render } from '../../lib/preact/v10.11.2/typed.index.js'
import SomeHTMComponent from '../../components/some-htm-component/index.module.js'
import SomePreactComp from '../../components/some-preact-component/index.js'
import SomeHTMClassComponent from '../../components/some-htm-class-component/index.js'

;(h);(Fragment)

export interface Props {}

export const App = (_props: Props) => {
  console.log('I am app.')
  console.log('This is props:', _props)
  return <div className="MyApp">
    <SomeHTMComponent />
    <SomeHTMClassComponent />
    <SomePreactComp />
  </div>
}

export default (props: Props, $root: HTMLElement) => {
  render(<App {...props} />, $root)
}
