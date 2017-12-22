import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import './style.css';

export default class Contacts extends Component {
    render() {
        const { className, ...props } = this.props;
        let size = this.props.size || 'medium';
        let dynCardClass = classnames({
            'card': true,
            'card--large': size === 'large',
            'card--medium': size === 'medium',
            'card--small': size === 'small',
            'is-last': !!this.props.last
        });
        let dynImgClass = classnames({
            'card__img': true,
            'is-empty': this.props.img == null
        });
        let imgUrl = this.props.img ? this.props.img : '';
        var bgStyle = {
            backgroundImage: 'url(' + imgUrl + ')'
        }


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