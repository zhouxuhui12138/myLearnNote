import React, { Component } from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import News from "./News"
import Messages from "./Messages"
import MyNavLink from "../../components/MyNavLink/"


export default class index extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <ul className="nav nav-tabs">
          <li><MyNavLink to="news">news</MyNavLink></li>
          <li><MyNavLink to="messages">messages</MyNavLink></li>
        </ul>

        <Routes>
          {/* router 路由嵌套V6写法 */}
          <Route path="news" element={<News />} />
          <Route path="messages" element={<Messages />} />
          <Route index element={<Navigate to="news" />} />
        </Routes>
      </div>
    )
  }
}
