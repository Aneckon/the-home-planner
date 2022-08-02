import React from 'react';

import logo from '../../image/logo.svg';
import setting from '../../image/setting.svg';
import exportIcon from '../../image/export-icon.svg';

import './header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <img className="header__logo" src={logo} alt="" />
          <div className="header__name">
            <p>My project</p>
          </div>
          <div className="header__right">
            <div className="header__settings">
              <img src={setting} alt="" />
              <img src={exportIcon} alt="" />
            </div>
            <div className="header__user">
              <div className="user"></div>
              <div className="header__user-content">
                <p>name</p>
                <span>email@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
