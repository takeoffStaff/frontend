import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ConfigProvider } from 'antd'
import ru from 'antd/es/locale/ru_RU'

ReactDOM.render(
  <ConfigProvider locale={ru}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)
serviceWorker.unregister()
