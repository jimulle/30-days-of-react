import React, { Component } from 'react';

class Item extends Component {
    render() {
        let activity = this.props.activity;
        return (
            <div className="item">
                <div className="avatar">
                    <img src={ activity.actor.avatar_url } alt={ activity.actor.display_login } />
                    { activity.actor.display_login }
                </div>
                <span className="time">{ activity.created_at }</span>
                <p>{ activity.type }</p>
                <p>{ activity.repo.name }</p>
            </div>
        )
    }
}

export default Item;