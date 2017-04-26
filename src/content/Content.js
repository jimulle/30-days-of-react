import React, { Component } from 'react';
import Item from './item/Item';

const data = require('../data.json').slice(0, 20);


class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            searchFilter: '',
            activities: [],
            filteredActivities: []
        };
    }

    componentDidMount() {
        this.setState({
            activities: data,
            filteredActivities: data
        }, this.updateData);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.requestRefresh && nextProps.requestRefresh !== this.props.requestRefresh) {
            this.setState({ loading: true, searchFilter: nextProps.searchFilter }, this.updateData);
        }
    }

    updateData() {
        const { activities, searchFilter } = this.state;
        const filter = (e => searchFilter === '' || e.actor.login.match(new RegExp(searchFilter)));
        let json = activities.filter(filter);
        this.setState({
            filteredActivities: json,
            loading: false
        }, this.props.onComponentRefresh);
        return json;
    }

    render() {
        const { loading, filteredActivities } = this.state;
        return (
            <div className="content">
                <div className="line"></div>
                { loading && <div>Loading</div> }
                { /* timeline item */ }
                { filteredActivities.map((activity) => {
                        return (<Item activity={ activity } key={ activity.id } />)
                })}
            </div>
        )
    }
}

export default Content;