import React, { Component } from "react"
import axios from "axios"
import PubSub from 'pubsub-js'


export default class Search extends Component {
  search = async () => {
    try {
      PubSub.publish('setState', { first: false, isLoading: true })
      const { value } = this.keyWord
      const res = await axios.get(`https://api.github.com/search/users?q=${value}`)
      PubSub.publish('setState', { isLoading: false, users: res.data.items })
    } catch (error) {
      PubSub.publish('setState', { err: '请求错误' })
    }
  }

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索github用户</h3>
          <div>
            <input
              type="text"
              placeholder="请输入关键词"
              ref={c => (this.keyWord = c)}
            />
            &nbsp;<button onClick={this.search}>搜索</button>
          </div>
        </section>
      </div>
    )
  }
}
