import React from 'react';
import { MenuBurger } from './MenuBurger';
import './NavMenu.scss';

export const NavMenu = () => {
  return (
    <div className='header__menu'>
      <div className='header__buttons'>
        <button
          className='header__button button button__login'
          type='button'
        >
          Log In
        </button>
        <button
          className='header__button button button__sign-up'
          type='button'
        >
          Sign Up
        </button>
      </div>
      <MenuBurger />
    </div>
  )
}
