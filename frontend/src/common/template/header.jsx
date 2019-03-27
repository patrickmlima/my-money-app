import React from 'react'

const noUnderline = {
  textDecoration: 'none'
}

export default props => (
  <header className='main-header'>
    <a href='/#/' className='logo' style={noUnderline}>
      <span className='logo-mini'><strong>My</strong> M</span>
      <span className='logo-lg'>
        <i className='fa fa-money'></i>
        <strong>My</strong> Money
      </span>
    </a>

    <nav className='navbar navbar-static-top'>
      <a href='#' className='sidebar-toggle' data-toggle='offcanvas' style={noUnderline}></a>
    </nav>
  </header>
)
