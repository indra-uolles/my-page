import React, { Component } from 'react';
import './style.css';

class WorkExp extends Component {

    _getDuties = (str) => {
        return <div dangerouslySetInnerHTML={this._createMarkup(str)} />;
    }

    _createMarkup = (str) => {
        return { __html: str };
    }

    render() {
        return (
            <div className="workexp row">
                <div className="col-md-4">
                    {this.props.dates}
                    <div className="workexp__timeinterval">{this.props.timeinterval}</div>
                </div>
                <div className="col-md-8">
                    <div className="workexp__content">
                        <div className="workexp__subtitle">{this.props.place}</div>
                        <p>{this.props.placedetails}</p>
                        <div className="workexp__subtitle">{this.props.position}</div>
                        {this._getDuties(this.props.duties)}
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkExp;