import path from 'path'
import execAsync from './utils/exec-async/index.js'

const ROOT_PATH = path.join(process.cwd())
const SRC_PATH = path.join(ROOT_PATH, 'src')
const DST_PATH = path.join(ROOT_PATH, 'dist')

try {
  // Remove previous build
  const rmOutput = await execAsync(`rm -rf ${DST_PATH}`)
  if (rmOutput.stderr !== '') throw new Error(rmOutput.stderr)
  if (rmOutput.stdout !== '') console.log(rmOutput.stdout)

  // Create new output folder
  const mkdirOutput = await execAsync(`mkdir ${DST_PATH}`)
  if (mkdirOutput.stderr !== '') throw new Error(mkdirOutput.stderr)
  if (mkdirOutput.stdout !== '') console.log(mkdirOutput.stdout)

  // Copy source to dist
  const cpOutput = await execAsync(`cp -r ${SRC_PATH}/ ${DST_PATH}`)
  if (cpOutput.stderr !== '') throw new Error(cpOutput.stderr)
  if (cpOutput.stdout !== '') console.log(cpOutput.stdout)

  // Transpile TypeScript in dist
  const tscOutput = await execAsync(`npx tsc -p ${ROOT_PATH}/tsconfig.json`)
  if (tscOutput.stderr !== '') throw new Error(tscOutput.stderr)
  if (tscOutput.stdout !== '') console.log(tscOutput.stdout)

  // Show a tree of dist contents
  const treeOutput = await execAsync(`npx tree --base ${DST_PATH} -l 4 --ignore fonts/`)
  if (treeOutput.stderr !== '') throw new Error(treeOutput.stderr)
  if (treeOutput.stdout !== '') console.log(treeOutput.stdout)
  
  // Transpile down to ES2015
  const babelOutput = await execAsync(`npx babel ${DST_PATH} -d ${DST_PATH} --extensions '.js,.jsx' --verbose`)
  if (babelOutput.stderr !== '') throw new Error(babelOutput.stderr)
  if (babelOutput.stdout !== '') console.log(babelOutput.stdout)
  

} catch (err) {
  console.log('An error occured.')
  console.log(err)
}
