import { h, Fragment, Component } from '../../lib/preact/v10.11.2/typed.index.js'

;(h);(Fragment)

export interface Props {
  content?: string
}

export default class StrToHtml extends Component<Props, {}> {
  /* * * * * * * * * * * * * * *
   * RENDER
   * * * * * * * * * * * * * * */
  render (): JSX.Element|string {
    const { props } = this

    // No content
    if (props.content === undefined || props.content === '') return <></>
    return <span dangerouslySetInnerHTML={{ __html: props.content ?? '' }} />
  }
}
