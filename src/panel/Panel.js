import React, { Component } from 'react';
import Header from '../header/Header';
import Content from '../content/Content';


class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            searchFilter: ''
        };
    }

    refresh() {
        this.setState({ loading: true });
    }

    onComponentRefresh() {
        this.setState({ loading: false });
    }

    handleSearch(value) {
        this.setState({
            searchFilter: value,
            loading: true
        });
    }

    render() {
        const { loading } = this.state;
        return (
            <div className="panel">
                <Header
                    title="Github Activity"
                    onSearch={ this.handleSearch.bind(this) } />
                <Content
                    onComponentRefresh={ this.onComponentRefresh.bind(this) }
                    requestRefresh={ loading }
                    searchFilter={ this.state.searchFilter } />
                <div className="footer">
                    footer...
                </div>
            </div>
        );
    }
}

export default Panel;