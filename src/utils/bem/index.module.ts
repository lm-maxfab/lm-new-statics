import BEM from './BEM/index.module.js'
import getNamesArr from './get-names-arr/index.module.js'

function bem (blockNameArg: any): BEM {
  const bem = new BEM()
  return bem.addBlock(blockNameArg)
}

export { BEM, getNamesArr, bem }
export default bem
