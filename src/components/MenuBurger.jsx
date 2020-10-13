import React from 'react';
import './MenuBurger.scss';

export const MenuBurger = () => {
  return (
    <div className='menu'>
      <input
        type='checkbox'
        name='menu__input'
        id='menu__input'
        className='menu__input'
      />
      <label htmlFor='menu__input' className='menu__label'>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </label>
      <nav className='nav header__nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <input
              className='dropdown__input'
              type='radio'
              id='item1'
              name='dropmenu'
            />
            <div className='nav__plus-icon'>+</div>
            <label htmlFor='item1' className='dropdown__label'>
              <div className='nav__link-container'>
                <a href='#' className='nav__link'>
                  <img
                    className='nav__icon'
                    src={require('../assets/human.svg')} 
                    alt='Human'
                  />
                  <img 
                    className='nav__icon--hover'
                    src={require('../assets/human_hover.svg')} 
                    alt='Human'
                  />
                  One
                </a>
              </div>
            </label>
            <ul className='dropdown'>
              <li className='dropdown__item'>
                <a href='#' className='dropdown__link'>item1</a>
              </li>
              <li className='dropdown__item'>
                <a href='#' className='dropdown__link'>item2</a>
              </li>
              <li className='dropdown__item'>
                <a href='#' className='dropdown__link'>item3</a>
              </li>
            </ul>
          </li>
          <li className='nav__item'>
            <input
              className='dropdown__input'
              type='radio'
              id='item2'
              name='dropmenu'
            />
            <div className='nav__plus-icon'>+</div>
            <label htmlFor='item2' className='dropdown__label'>
              <div className='nav__link-container'>
                <a href='#' className='nav__link'>
                  <img 
                    className='nav__icon'
                    src={require('../assets/card.svg')} 
                    alt='Card'
                  />
                  <img 
                    className='nav__icon--hover'
                    src={require('../assets/card_hover.svg')} 
                    alt='Card'
                  />
                  Two
                </a>
              </div>
            </label>
            <ul className='dropdown'>
              <li className='dropdown__item'>
                <a href='#' className='dropdown__link'>item1</a>
              </li>
              <li className='dropdown__item'>
                <a href='#' className='dropdown__link'>item2</a>
              </li>
              <li className='dropdown__item'>
                <a href='#' className='dropdown__link'>item3</a>
              </li>
            </ul>
          </li>
          <li className='nav__item'>
            <input
              className='dropdown__input'
              type='radio'
              id='item3'
              name='dropmenu'
            />
            <div className='nav__plus-icon'>+</div>
            <label htmlFor='item3' className='dropdown__label'>
              <div className='nav__link-container'>
              <a href='#' className='nav__link'>
                <img 
                  className='nav__icon'
                  src={require('../assets/bank.svg')} 
                  alt='Bank'
                />
                <img 
                  className='nav__icon--hover'
                  src={require('../assets/bank_hover.svg')} 
                  alt='Bank'
                />
                Three
              </a>
            </div>
            </label>
            <ul className='dropdown'>
              <li className='dropdown__item'>
                <a href='#' className='dropdown__link'>item1</a>
              </li>
              <li className='dropdown__item'>
                <a href='#' className='dropdown__link'>item2</a>
              </li>
              <li className='dropdown__item'>
                <a href='#' className='dropdown__link'>item3</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}
