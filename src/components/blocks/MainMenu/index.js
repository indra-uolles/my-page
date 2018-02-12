import React, { Component } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ item }) => {
    return item.type === 'rel' ? (
        <NavLink to={`/${item.url}`} activeClassName='active'>
            {item.text}
        </NavLink>
    ) : (
        <a href={item.url} target='_blank'>
            {item.text}
        </a>
    );
};

class MainMenu extends Component {
    render() {
        const menuItems = this.props.mainMenuItems || [];

        return (
            <nav>
                <ul className='main-menu'>
                    {menuItems.map((item, index) => (
                        <li className='main-menu__item' key={index}>
                            <MenuItem item={item} />
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default MainMenu;