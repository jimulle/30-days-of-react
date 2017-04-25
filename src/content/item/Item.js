import React, { Component } from 'react';

class Item extends Component {
    render() {
        let activity = this.props.activity;
        return (
            <div className="item">
                <div className="avatar">
                    <img src={ activity.user.avatar } alt={ activity.user.name } />
                    { activity.user.name }
                </div>
                <span className="time">{ activity.timestamp }</span>
                <p>{ activity.text }</p>
                <div className="commentCount">{ activity.comments.length }</div>
            </div>
        )
    }
}

export default Item;