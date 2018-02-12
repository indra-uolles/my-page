import React, { Component } from 'react';
import logo from './t_logo_small.png';
import './style.css';

export default class TelegramLink extends Component {
    render() {
        const link = this.props.link || '#';
        const bgStyle = {
            backgroundImage: 'url(' + logo + ')'
        };

        return (
            <a
                href={link}
                target='_blank'
                className='telegram-link'
                style={bgStyle}
            />
        );
    }
}
