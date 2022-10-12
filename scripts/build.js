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

  // Transpile in dist
  const tscOutput = await execAsync(`npx tsc -p ${ROOT_PATH}/tsconfig.json`)
  if (tscOutput.stderr !== '') throw new Error(tscOutput.stderr)
  if (tscOutput.stdout !== '') console.log(tscOutput.stdout)

} catch (err) {
  console.log('An error occured.')
  console.log(err)
}
