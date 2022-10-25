import BEM from './BEM/index.module'
import getNamesArr from './get-names-arr/index.module'

function bem (blockNameArg: any): BEM {
  const bem = new BEM()
  return bem.addBlock(blockNameArg)
}

export { BEM, getNamesArr, bem }
export default bem
