import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import { AppRoute } from './router/AppRoute'
import { store } from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <AppRoute />
  </Provider>,
  document.getElementById('root')
)
