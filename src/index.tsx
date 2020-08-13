import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ConfigProvider } from 'antd'
import ru from 'antd/es/locale/ru_RU'
import { Provider } from 'react-redux'
import { store } from 'store/configureStore'
import 'moment/locale/ru'

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={ru}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()
