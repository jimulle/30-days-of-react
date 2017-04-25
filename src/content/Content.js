import React, { Component } from 'react';
import Item from './item/Item';

const data = require('../data.json').slice(0, 8);

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            activities: []
        };
    }

    componentDidMount() {
        this.updateData();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.requestRefresh && nextProps.requestRefresh !== this.props.requestRefresh) {
            this.setState({ loading: true }, this.updateData);
        }
    }

    updateData() {
        this.setState({
            loading: false,
            activities: data.sort(() => 0.5 - Math.random()).slice(0, 4)
        }, this.props.onComponentRefresh);
    }

    render() {
        const { loading, activities } = this.state;
        return (
            <div className="content">
                <div className="line"></div>
                { loading && <div>Loading</div> }
                { /* timeline item */ }
                { activities.map((activity) => {
                        return (<Item activity={ activity } key={ activity.id } />)
                })}
            </div>
        )
    }
}

export default Content;