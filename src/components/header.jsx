import React from 'react';
import '../stylesheets/header.css';

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <div id="sub-header">
          <img className='icon' id='hamburger-icon' alt='menu icon'></img>
          <a href='/' id='trivago-logo' />
          <img className='icon' id='search-icon' alt='search icon'></img>
        </div>
      </div>
    )
  }
}

export default Header;