import React, { Component } from 'react';
import Header from './header/Header';
import Content from './content/Content';
import './App.css';

const activities = [
    {
        id: '0001',
        timestamp: new Date().getTime(),
        text: 'Ate lunch',
        user: {
            id: 1, name: 'Mr. T',
            avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/j01.png'
        },
        comments: [{ from: 'Ari', text: 'Me too!' }]
    },
    {
        id: '0002',
        timestamp: new Date().getTime(),
        text: 'Pittied a fool',
        user: {
            id: 1, name: 'Mr. T',
            avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/j01.png'
        },
        comments: [{ from: 'Face', text: 'hahahahahahahaha!' }]
    }
];

class App extends Component {
    render() {
        return (
            <div className="notificationsFrame">
                <div className="panel">
                    { /* content goes here */ }
                    <Header title="Timeline" />
                    <Content activities={ activities }/>
                </div>
            </div>
        )
    }
}

export default App;