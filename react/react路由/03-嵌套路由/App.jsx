import React, { Component } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import MyNavLink from "./components/MyNavLink"
import About from "./pages/About"
import Home from "./pages/Home"

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 路由跳转 */}
              <MyNavLink to="/home">home</MyNavLink>
              <MyNavLink to="/about">about</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Routes>
                  <Route path="/about" element={<About />} />
                  {/* router 路由嵌套V6写法 */}
                  <Route path="/home/*" element={<Home />} />
                  {/* 重定向 */}
                  <Route index element={<Navigate to="/about" />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
