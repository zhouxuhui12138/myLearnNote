import React, { Component } from "react"
import "./index.css"
import PubSub from 'pubsub-js'

export default class List extends Component {

  state = {
    users: [],
    first: true,
    isLoading: false,
    err: ''
  }

  componentDidMount() {
    this.token = PubSub.subscribe('setState', (msg, stateObj) => {
      this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, first, isLoading, err } = this.state
    return (
      <div className="row">
        {
          first ? <h1>欢迎使用</h1> : 
          err ? <h1>{err}</h1> :
          isLoading ? <h1>Loading...</h1> : 
          users.length === 0 ? <h1>搜索为空</h1> :
          users.map(item => {
            return (
              <div className="card" key={item.id}>
              <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.avatar_url}
                  style={{ width: "100px" }}
                  alt="avatar"
                />
              </a>
              <p className="card-text">{item.login}</p>
            </div>
            )
          })
        }
      </div>
    )
  }
}
