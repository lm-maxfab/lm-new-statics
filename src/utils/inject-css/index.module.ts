export class CustomError extends Error {
  details: string[]
  constructor (message: string, details: string[]) {
    super(message)
    this.details = details
  }
}

// [WIP] Maybe do something better than a 500ms timeout ?

export default async function injectCss (_hrefs: string|string[]): Promise<true|CustomError> {
  let isResolved = false
  return new Promise(resolve => {
    const hrefs = Array.isArray(_hrefs) ? _hrefs : [_hrefs]

    const loadedTags = hrefs.map(href => ({ href, loaded: false }))
    window.setTimeout(() => {
      if (isResolved) return
      const notLoaded = loadedTags.filter(tag => tag.loaded === false).map(tag => tag.href)
      const error = new CustomError('Some styles could not be loaded.', notLoaded)
      resolve(error)
    }, 500)

    function handleLoadSuccess (href: string) {
      const found = loadedTags.find(tag => tag.href === href)
      if (found === undefined) return
      found.loaded = true
      const allLoaded = loadedTags.every(tag => tag.loaded === true)
      if (allLoaded && !isResolved) {
        isResolved = true
        resolve(true)
      }
    }

    const styleTags = hrefs.map(href => {
      const tag = document.createElement('link')
      tag.setAttribute('rel', 'stylesheet')
      tag.setAttribute('type', 'text/css')
      tag.setAttribute('href', href)
      tag.addEventListener('load', () => handleLoadSuccess(href))
      return tag
    })

    const head = document.head
    for (const tag of styleTags) head.append(tag)
  })
}
