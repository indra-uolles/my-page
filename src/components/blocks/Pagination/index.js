import React, { PropTypes, Component } from 'react';
import './style.css';

export default class Pagination extends Component {
    render() {
        return (
            <div className="pagination-wrapper">
                <ul className="pagination">
                    <li className="prev disabled"><span>«</span></li>
                    <li className="active"><a href="#" data-page="0">1</a></li>
                    <li><a href="#" data-page="1">2</a></li>
                    <li><a href="#" data-page="2">3</a></li>
                    <li><a href="#" data-page="3">4</a></li>
                    <li><a href="#" data-page="4">5</a></li>
                    <li><a href="#" data-page="5">6</a></li>
                    <li><a href="#" data-page="6">7</a></li>
                    <li><a href="#" data-page="7">8</a></li>
                    <li><a href="#" data-page="8">9</a></li>
                    <li><a href="#" data-page="9">10</a></li>
                    <li className="next"><a href="#" data-page="1">»</a></li>
                </ul>
            </div>
        );
    }
}