import React, { Component } from 'react';
import siteLogo from '../../assets/lunnch_logo.svg'
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="header">
          <div className="logo">
            <div className="logo__background"></div>
            <img className="logo__image" src={siteLogo} alt="Lunnch"/>
          </div>
          <div className="header__centre-block"></div>
        </header>
    );
  }
}

export default Header;




