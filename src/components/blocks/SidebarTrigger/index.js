import React, { Component } from 'react';
import './style.css';

import IconMenu from 'react-icons/lib/md/menu';

class SidebarTrigger extends Component {
    render() {
        return (
            <div
                className='icon-hamburger'
                onClick={this.props.onSidebarTrigger}
            >
                <IconMenu
                    style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#fff'
                    }}
                />
            </div>
        );
    }
}

export default SidebarTrigger;
