export default function getLmhComponentNodes (): HTMLElement[] {
  const selector = '.lmh-component'
  const nodeList = document.querySelectorAll(selector) as NodeListOf<HTMLElement>
  return [...nodeList]
}
