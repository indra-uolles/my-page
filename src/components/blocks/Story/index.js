import React, { Component } from 'react';
import './style.css';

class Story extends Component {
    render() {

        return (
        <div className="story clearfix">
            <div className="story__image">
                <a href={this.props.link} target="_blank">
                    <img src={this.props.img}/>
                </a>
                <div className="story__category">{this.props.category}</div>
            </div>
            <div className="story__text">
                <h3 className="story__title"><a href={this.props.link} target="_blank">{this.props.title}</a></h3>
                <div className="story__place">{this.props.place}</div>
                <div className="story__image story__image--mobile">
                    <a href={this.props.link} target="_blank">
                        <img src={this.props.img}/>
                    </a>
                    <div className="story__category">{this.props.category}</div>
                </div>
                <div className="story__desc"><a href={this.props.link} target="_blank">{this.props.desc}</a></div>
            </div>
        </div>
        );
    }
}

export default Story;