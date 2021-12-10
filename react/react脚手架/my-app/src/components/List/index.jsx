import React, { Component } from "react"
import './index.css'

export default class List extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="card">
            <a
              href="https://github.com/reactjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://avatars.githubusercontent.com/u/6412038?v=3"
                style={{ width: "100px" }}
                alt="avatar"
              />
            </a>
            <p className="card-text">reactjs</p>
          </div>
        </div>
      </div>
    )
  }
}
