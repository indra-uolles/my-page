import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import './style.css';

class MainMenu extends Component {
  render() {
    const menuItems = this.props.mainMenuItems || [];
    const menuItemsHTML = menuItems.map((item, index) => {
        return (
            <li className="main-menu__item" key={index}><a href={item.url}>{item.text}</a></li>
        );
    });

    return (
        <nav>
            <ul className="main-menu">
                {menuItemsHTML}
            </ul>
        </nav>
    );
  }
}

export default MainMenu;