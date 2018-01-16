import React, { PropTypes, Component } from 'react';
import logo from './t_logo_small.png';
import './style.css';

export default class TelegramLink extends Component {
    render() {
        let link = this.props.link || '#';
        var bgStyle = {
            backgroundImage: 'url(' + logo + ')'
        };

        return (
            <a href={link} className="telegram-link" style={bgStyle}></a>
        );
    }
}