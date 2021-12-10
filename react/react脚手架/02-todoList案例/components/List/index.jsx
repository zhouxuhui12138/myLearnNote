import React, { Component } from "react"
import propTypes from "prop-types"
import "./index.css"

import Item from "../Item"

export class List extends Component {
  // 接受的props类型限制
  static propTypes = {
    updateTodo: propTypes.func.isRequired,
    todos: propTypes.array
  }

  render() {
    const { todos, updateTodo, delectTodo } = this.props

    return (
      <ul className="todo-main">
        {
          todos.map((todo) => {
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} delectTodo={delectTodo} />
          })
        }
      </ul>
    )
  }
}

export default List
