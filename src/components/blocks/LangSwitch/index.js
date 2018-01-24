import React, { Component } from 'react';

import './style.css';

const LangSwitchItem = ({item}) => {
    const itemClassName = item.isActive ? 'is-active' : '';

    return (
        <a className={itemClassName} href={item.url}>{item.text}</a>
    );
};

class LangSwitch extends Component {

    render() {
        const langItems = this.props.items || [];

        return (
            <div className="lang-switch">
                { langItems.map(
                    (item, index) =>
                        <LangSwitchItem item={item} key={index} />
                    )
                }
            </div>
        );
    }
}

export default LangSwitch;