import React, { Component } from "react"
import axios from "axios"

export default class app extends Component {
  state = {
    saying: {
      content: "",
      source: ""
    }
  }

  getSaying = async () => {
    const key = "1d46b2877a95ee0007d4ddfaf68ac49f"
    const { data: res } = await axios.get("http://api.tianapi.com/hotreview/index", {params: { key }})
    const content = res.newslist[0].content
    const source = res.newslist[0].source
    this.setState({saying: { content, source }})
  }

  render() {
    const { saying } = this.state
    return (
      <div>
        <button onClick={this.getSaying}>点我获取名言</button>
        <hr />
        <div style={{display: saying.source === '' ? 'none' : 'block'}}>
          <h1>{saying.content}</h1>
          <h3>by: {saying.source}</h3>
        </div>
      </div>
    )
  }
}
