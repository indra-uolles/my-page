import React, { Component } from 'react';
import './style.css';

class TagList extends Component {
    render() {
        const items = this.props.items || [];

        return (
            <div className='taglist'>
                {items.map((item, index) => (
                    <span className='tag' key={index}>
                        {item}
                    </span>
                ))}
            </div>
        );
    }
}

export default TagList;