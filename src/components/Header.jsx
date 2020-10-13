import React from 'react';
import logo from '../assets/logo.png';
import { NavMenu } from './NavMenu';
import './Header.scss';

export const Header = () => {
  return (
    <div className='header container'>
      <div className='header__logo-container'>
        <a href='#' className='header__logo-link'>
          <img src={logo} alt='Logo' className='header__logo'/>
        </a>
      </div>
      <NavMenu />
    </div>
  )
}
