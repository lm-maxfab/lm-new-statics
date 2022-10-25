import path from 'path'
import execAsync from './utils/exec-async/index.js'

const ROOT_PATH = path.join(process.cwd())
const SRC_PATH = path.join(ROOT_PATH, 'src')
const DST_PATH = path.join(ROOT_PATH, 'dist')

const isEmptyOrUndefined = (elt) => (elt === '' || elt === undefined)

try {
  // Remove previous build
  const rmOutput = await execAsync(`rm -rf ${DST_PATH}`)
  if (!isEmptyOrUndefined(rmOutput.stderr)) throw new Error(rmOutput.stderr)
  if (!isEmptyOrUndefined(rmOutput.stdout)) console.log(rmOutput.stdout)

  // Create new output folder
  const mkdirOutput = await execAsync(`mkdir ${DST_PATH}`)
  if (!isEmptyOrUndefined(mkdirOutput.stderr)) throw new Error(mkdirOutput.stderr)
  if (!isEmptyOrUndefined(mkdirOutput.stdout)) console.log(mkdirOutput.stdout)

  // Copy source to dist
  const cpOutput = await execAsync(`cp -r ${SRC_PATH}/ ${DST_PATH}`)
  if (!isEmptyOrUndefined(cpOutput.stderr)) throw new Error(cpOutput.stderr)
  if (!isEmptyOrUndefined(cpOutput.stdout)) console.log(cpOutput.stdout)

  // Transpile TypeScript in dist
  const tscOutput = await execAsync(`npx tsc -p ${ROOT_PATH}/tsconfig.json`)
  if (!isEmptyOrUndefined(tscOutput.stderr)) throw new Error(tscOutput.stderr)
  if (!isEmptyOrUndefined(tscOutput.stdout)) console.log(tscOutput.stdout)
  
  // Transpile down to ES2015
  const babelOutput = await execAsync(`npx babel ${DST_PATH} -d ${DST_PATH} --extensions '.js,.jsx' --verbose`)
  if (!isEmptyOrUndefined(babelOutput.stderr)) throw new Error(babelOutput.stderr)
  if (!isEmptyOrUndefined(babelOutput.stdout)) console.log(babelOutput.stdout)

  // Transpile SCSS in dist
  const sassOutput = execAsync(`npx sass ${DST_PATH}`)
  if (!isEmptyOrUndefined(sassOutput.stderr)) throw new Error(sassOutput.stderr)
  if (!isEmptyOrUndefined(sassOutput.stdout)) console.log(sassOutput.stdout)
  
} catch (err) {
  console.log('An error occured.')
  console.log(err)
}
