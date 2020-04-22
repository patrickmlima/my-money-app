import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import promisse from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './main/reducers'
import AuthOrApp from './main/authOrApp'

const store = applyMiddleware(promisse, multi, thunk)(createStore)(reducers)
ReactDOM.render(
  <Provider store={store}>
    <AuthOrApp />
  </Provider>
  , document.getElementById("app"))
