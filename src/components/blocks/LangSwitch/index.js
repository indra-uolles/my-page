import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

class LangSwitch extends Component {

    render() {
        const { className, ...props } = this.props;
        const langItems = this.props.items || [];
        const langItemsHTML = langItems.map((item, index) => {
            const itemClassName = !!item.isActive ? 'is-active' : '';

            return (
                <a className={itemClassName} key={index} href={item.url}>{item.text}</a>
            );
        });

        return (
            <div className="lang-switch">
                {langItemsHTML}
            </div>
        );
    }
}

export default LangSwitch;