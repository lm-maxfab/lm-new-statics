import getHeaderElement from '../get-header-element/index.module'

// [WIP] the func should inject itself the test divs
// instead of expecting them to be already there
console.warn('This module is deprecaded.')

export interface ViewportDimensions {
  width: number
  height: number
  orientation: string
  display: string
  ratio: string
  navHeight: number|undefined
}

export default function getViewportDimensions (): ViewportDimensions {
  const dirtyVhDiv = document.querySelector('.lm-app-dirty-box-for-vh-calc')
  const dirtyVwDiv = document.querySelector('.lm-app-dirty-box-for-vw-calc')
  const dirtyVhDivHeight = dirtyVhDiv?.getBoundingClientRect().height ?? 0
  const dirtyVwDivWidth = dirtyVwDiv?.getBoundingClientRect().width ?? 0
  const height = dirtyVhDivHeight !== 0 ? dirtyVhDivHeight : window.innerHeight
  const width = dirtyVwDivWidth !== 0 ? dirtyVwDivWidth : window.innerWidth

  // Orientation
  const orientation = width >= height ? 'landscape' : 'portrait'

  // Display
  const breakpointsInfo = [
    { min: -Infinity, max: 320, name: 'xs' },
    { min: 320, max: 800, name: 'sm' },
    { min: 800, max: 1200, name: 'md' },
    { min: 1200, max: 1600, name: 'lg' },
    { min: 1600, max: Infinity, name: 'xl' }
  ]
  const currentBreakpoint = breakpointsInfo.find(bkpt => {
    return bkpt.min < width
      && bkpt.max >= width
  })
  const display = currentBreakpoint?.name ?? 'sm'

  // Ratio
  const ratiosInfo = [
    { min: 0, max: 1 / 2, name: 'xtall' },
    { min: 1 / 2, max: 4 / 5, name: 'tall' },
    { min: 4 / 5, max: 5 / 4, name: 'square' },
    { min: 5 / 4, max: 2, name: 'wide' },
    { min: 2, max: Infinity, name: 'xwide' }
  ]
  const currentRatio = ratiosInfo.find(ratio => {
    const actualRatio = width / height
    return ratio.min < actualRatio
      && ratio.max >= actualRatio
  })
  const ratio = currentRatio?.name ?? 'square'

  // Nav height
  const nav = getHeaderElement()
  const navHeight = nav?.getBoundingClientRect().height ?? 0

  // Return
  return {
    width,
    height,
    orientation,
    display,
    ratio,
    navHeight
  }
}
