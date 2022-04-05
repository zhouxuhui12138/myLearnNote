import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './01-base/02-函数式组件.jsx'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
