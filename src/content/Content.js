import React, { Component } from 'react';
import Item from './item/Item';

class Content extends Component {
    render() {
        const { activities } = this.props; // ES6 destructuring
        return (
            <div className="content">
                <div className="line"></div>
            { /* timeline item */ }
                { activities.map((activity) => {
                        return (<Item activity={ activity } key={ activity.id } />)
                })}
            </div>
        )
    }
}

export default Content;