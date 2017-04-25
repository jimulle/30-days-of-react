import React, { Component } from 'react';
import Header from './header/Header';
import Content from './content/Content';
import './App.css';

// An async request
const data = require('./data.json');
const fetchEvents = () => Promise.resolve(data)
                      .then(json => json.slice(0, 4))

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { refreshing: false };
    }

    refresh() {
        this.setState({ refreshing: true });
    }

    onComponentRefresh() {
        this.setState({ refreshing: false });
    }

    render() {
        const { refreshing } = this.state;
        return (
            <div className="notificationsFrame">
                <div className="panel">
                    { /* content goes here */ }
                    <Header title="Github Activity" />
                    <Content
                        onComponentRefresh={ this.onComponentRefresh.bind(this) }
                        requestRefresh={ refreshing }
                        fetchData={ fetchEvents } />
                    <div className="footer">
                        <button onClick={ this.refresh.bind(this) }>
                            <i className="fa fa-refresh" />
                            Refresh
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;