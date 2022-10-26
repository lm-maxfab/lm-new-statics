import {
  Component as Component_typed,
  Fragment as Fragment_typed,
  createContext as createContext_typed,
  createElement as createElement_typed,
  createRef as createRef_typed,
  h as h_typed,
  hydrate as hydrate_typed,
  isValidElement as isValidElement_typed,
  options as options_typed,
  render as render_typed,
  toChildArray as toChildArray_typed
} from 'preact'

import {
  Component as Component_untyped,
  Fragment as Fragment_untyped,
  createContext as createContext_untyped,
  createElement as createElement_untyped,
  createRef as createRef_untyped,
  h as h_untyped,
  hydrate as hydrate_untyped,
  isValidElement as isValidElement_untyped,
  options as options_untyped,
  render as render_untyped,
  toChildArray as toChildArray_untyped
} from './index.js'

const Component = Component_untyped as typeof Component_typed
const Fragment = Fragment_untyped as typeof Fragment_typed
const createContext = createContext_untyped as typeof createContext_typed
const createElement = createElement_untyped as typeof createElement_typed
const createRef = createRef_untyped as typeof createRef_typed
const h = h_untyped as typeof h_typed
const hydrate = hydrate_untyped as typeof hydrate_typed
const isValidElement = isValidElement_untyped as typeof isValidElement_typed
const options = options_untyped as typeof options_typed
const render = render_untyped as typeof render_typed
const toChildArray = toChildArray_untyped as typeof toChildArray_typed

export {
  Component,
  Fragment,
  createContext,
  createElement,
  createRef,
  h,
  hydrate,
  isValidElement,
  options,
  render,
  toChildArray
}
