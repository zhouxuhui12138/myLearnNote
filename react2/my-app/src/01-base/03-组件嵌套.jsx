import React from 'react'

const Header = () => <h1>Header</h1>

const Main = () => {
  return (
    <div>
      <h2>Main</h2>
      <Children />
    </div>
  )
}

const Children = () => <div>children</div>

const Footer = () => <div>Footer</div>

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
