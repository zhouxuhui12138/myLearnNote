import React, { Component } from "react"
import List from "./components/List"
import Search from "./components/Search"

export default class app extends Component {

  state = {
    users: [],
    first: true,
    isLoading: false,
    err: ''
  }

  updateState = (state) => {
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <Search updateState={this.updateState} />
        <List {...this.state} />
      </div>
    )
  }
}
