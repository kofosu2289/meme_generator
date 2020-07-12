import * as React from 'react'
import './button.scss'

function Button(props: any): JSX.Element {
  return <button className="Button">{props.children}</button>
}

export default Button