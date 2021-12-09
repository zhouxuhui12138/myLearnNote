import { Component } from "react"

// css模块化
import welcome from './index.module.css'

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <p className={welcome.title}>Welcome</p>
      </div>
    )
  }
}

