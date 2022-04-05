import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './01-base/03-组件嵌套.jsx'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
