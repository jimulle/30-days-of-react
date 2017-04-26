import React, { Component } from 'react';
import Panel from './panel/Panel';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="notificationsFrame">
                <Panel />
            </div>
        )
    }
}

export default App;