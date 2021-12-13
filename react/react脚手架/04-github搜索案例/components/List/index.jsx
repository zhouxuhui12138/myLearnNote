import React, { Component } from "react"
import "./index.css"

export default class List extends Component {
  render() {
    const { users, first, isLoading, err } = this.props
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
