import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import promisse from 'redux-promise'

import reducers from './main/reducers'
import App from './main/app'

const store = applyMiddleware(promisse)(createStore)(reducers)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("app"))
