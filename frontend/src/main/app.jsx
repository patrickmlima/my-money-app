import '../common/template/dependencies'

import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routes from './routes'

export default props => (
  <Router>
    <div className='wrapper'>
      <Header />
      <Sidebar />
      <div className='content-wrapper'>
        <Routes />
      </div>
      <Footer />
    </div>
  </Router>
)
