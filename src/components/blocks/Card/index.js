import React, { Component } from 'react';
import classnames from 'classnames';
import './style.css';

export default class Contacts extends Component {
    render() {
        const size = this.props.size || 'medium';
        const dynCardClass = classnames({
            'card': true,
            'card--large': size === 'large',
            'card--medium': size === 'medium',
            'card--small': size === 'small',
            'is-last': !!this.props.last
        });
        const dynImgClass = classnames({
            'card__img': true,
            'is-empty': this.props.img == null
        });
        const imgUrl = this.props.img ? this.props.img : '';
        const bgStyle = {
            backgroundImage: 'url(' + imgUrl + ')'
        };

        return (
            <div className={dynCardClass}>
                <a href="#">
                  <div className={dynImgClass} style={bgStyle}></div>
                </a>
                <div className="card__descr">
                    <a href="#" className="card__tag">{this.props.tag}</a>
                    <a href="#"><h3>{this.props.header}</h3></a>
                </div>
            </div>
        );
    }
}