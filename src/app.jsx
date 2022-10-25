import { h, Component, render } from 'https://unpkg.com/preact?module';
import SomeComp from './Component.js'

const node = document.querySelector('#app-node')
render(<SomeComp />, node)
