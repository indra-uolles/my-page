import React, { PropTypes, Component } from 'react';
import './style.css';

class TagList extends Component {
  render() {
    const items = this.props.items || [];
    const itemsHTML = items.map((item, index) => {
        return (
            <span className="tag" key={index}>{item}</span>
        );
    });

    return (
        <div className="taglist">
            {itemsHTML}
        </div>
    );
  }
}

export default TagList;