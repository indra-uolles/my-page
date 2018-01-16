import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import './style.css';
import { NavLink } from 'react-router-dom'

class MainMenu extends Component {
  render() {
    const menuItems = this.props.mainMenuItems || [];
    const menuItemsJSX = menuItems.map((item, index) => {
        return (
            <li className='main-menu__item' key={index}>
                {
                    item.type === 'rel' ?
                    <NavLink to={`/${item.url}`} activeClassName='active'>{item.text}</NavLink> :
                    <a href={item.url} target='_blank'>{item.text}</a>
                }
            </li>
        );
    });

    return (
        <nav>
            <ul className='main-menu'>
                {menuItemsJSX}
            </ul>
        </nav>
    );
  }
}

export default MainMenu;