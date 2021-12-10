import React, { Component } from "react"

import './index.css'

export class Footer extends Component {

  handleAllCheck = (e) => {
    this.props.handleAllCheck(e.target.checked)
  }

  delectDoneTodo = () => {
    this.props.delectDoneTodo()
  }

  render() {
    const { todos } = this.props
    const total = todos.length
    const doneCount = todos.reduce((pre, item) => {
      if (item.done) {
        pre++
      }
      return pre
    }, 0)

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === total && doneCount!== 0 ? true : false} onChange={this.handleAllCheck} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.delectDoneTodo}>清除已完成任务</button>
      </div>
    )
  }
}

export default Footer
