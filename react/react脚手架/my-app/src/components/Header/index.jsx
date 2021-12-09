import React, { Component } from "react"
import { nanoid } from 'nanoid'
import propTypes from "prop-types"

import './index.css'

export class Header extends Component {

  static propTypes = {
    addTodo: propTypes.func.isRequired
  }

  handleKeyUp = (e) => {
    const { key, target } = e
    const { addTodo } = this.props

    if (key !== 'Enter') return
    if (target.value.trim() === '') return

    const todoObj = { id: nanoid(), name: target.value, done: false }
    addTodo(todoObj)
    target.value = ''
  }
  
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}

export default Header
