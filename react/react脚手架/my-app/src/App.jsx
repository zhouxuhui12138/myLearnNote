import React, { Component } from "react"

import "./App.css"

import Footer from "./components/Footer"
import Header from "./components/Header/index"
import List from "./components/List"

export default class app extends Component {
  state = {
    todos: [
      { id: 1, name: "吃饭", done: true },
      { id: 2, name: "睡觉", done: true },
      { id: 3, name: "玩游戏", done: false },
      { id: 4, name: "逛街", done: true }
    ]
  }

  addTodo = todoObj => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }

  updateTodo = (id, checkd) => {
    const { todos } = this.state
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        // 拷贝并重新赋值
        return { ...todo, done: checkd }
      } else {
        return todo
      }
    })
    this.setState({ todos: newTodos })
  }

  delectTodo = id => {
    const { todos } = this.state
    const index = todos.findIndex(item => id === item.id)
    todos.splice(index, 1)
    this.setState({ todos })
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List
              todos={todos}
              updateTodo={this.updateTodo}
              delectTodo={this.delectTodo}
            />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
