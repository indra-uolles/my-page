import React, { PropTypes, Component } from 'react';
import byvaet from './byvaet.jpg';
import './style.css';

class PageNotFound extends Component {

    render() {

        return (
            <div className='error-wrap'>
                <img src={byvaet} alt="Бывает" />
                <p className='error'>404</p>
            </div>
        );
    }
}

export default PageNotFound;