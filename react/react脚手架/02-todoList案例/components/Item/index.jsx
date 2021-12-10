import React, { Component } from "react"

import "./index.css"

export class Item extends Component {
  state = {
    mouse: false
  }

  handleChange = id => {
    return e => {
      this.props.updateTodo(id, e.target.checked)
    }
  }

  handleMouse = flag => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  handleDelect = id => {
    return () => {
      if (window.confirm('确认删除吗')) {
        this.props.delectTodo(id)
      }
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state

    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: mouse ? "#eee" : "#fff" }}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleChange(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={this.handleDelect(id)}
        >
          删除
        </button>
      </li>
    )
  }
}

export default Item
