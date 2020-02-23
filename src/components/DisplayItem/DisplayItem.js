import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './DisplayItem.css';

import { VideoSourceTypes } from '../../types/VideoSourceTypes';
import { ContentTypes } from '../../types/ContentTypes';

class displayItem extends Component {


    videoSourceConfig = VideoSourceTypes.find(source => {
        return this.props.itemData.source && source.name === this.props.itemData.source;
    });

    isValidItem = ({type, source, views}) => {
        return type && source && views;
    };

    dateStrOption = { year: 'numeric', month: 'short', day: 'numeric' };

    numberToReadableText(num) {
        const number = Math.abs(Number(num));
        return number >= 1.0e+9 ?
            number / 1.0e+9 + "B" : number >= 1.0e+6 ?
                Math.round( (number / 1.0e+6) * 10 ) / 10 + "M" : number >= 1.0e+3 ?
                    number / 1.0e+3 + "K" : number;
    };

    secondsToTimeText(num) {
        let minutes = Math.floor(num / 60);
        let seconds = num - minutes * 60;

        return `${minutes}:${seconds}m`;
    };

    componentDidMount() {
        if (window['Playbuzz']) window['Playbuzz'].render();
    }

    render() {
        if(this.isValidItem(this.props.itemData)) {
            const dateStr = new Date().toLocaleDateString("en-US", this.dateStrOption);
            const readableViewsNumber = this.numberToReadableText(this.props.itemData.views);
            const itemId = this.props.itemData[this.videoSourceConfig.id];
            switch (this.props.itemData.type) {
                case ContentTypes.VIDEO:
                    return (
                        <Link to={`/items/${itemId}`} className="display-item">
                                {this.videoSourceConfig.getPlayer(itemId)}
                                <div className="display-item__details">
                                    <h2>{this.props.itemData.title || '[no-title]'}</h2>
                                    <div className="display-item__info">
                                        <p>{`${dateStr} - ${readableViewsNumber}`}</p>
                                    </div>
                                    <div className="display-item__bottom-bar">
                                        <div>{this.videoSourceConfig.getIcon()}</div>
                                    </div>
                                </div>
                        </Link>
                    );
                case ContentTypes.QUIZ:
                case ContentTypes.TRIVIA:
                case ContentTypes.POLL:
                    return (
                        <Link to={`/items/${itemId}`} className="display-item">
                            <img src={this.props.itemData.thumbnail}></img>
                            <div className="display-item__details">
                                <h2>{this.props.itemData.title || '[no-title]'}</h2>
                                <div className="display-item__info">
                                    <p>{`${dateStr} - ${readableViewsNumber}`}</p>
                                </div>
                                <div className="display-item__bottom-bar">
                                    <div>{this.videoSourceConfig.getIcon()}</div>
                                </div>
                            </div>
                        </Link>
                    );
                default:
                    return (
                        <div className="display-item error-item">
                            <div>ITEM NOT AVAILABLE</div>
                        </div>
                    );

            };
        }
        return (
            <div className="display-item error-item">
                <div>VIDEO NOT AVAILABLE</div>
            </div>
        );
    }
}

export default displayItem;