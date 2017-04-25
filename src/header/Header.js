import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVisible: false
        };
    }

    toggleSearch() {
        this.setState({
            searchVisible: !this.state.searchVisible
        });
    }

    render() {
        let searchInputClasses = ['searchInput'];
        if (this.state.searchVisible) {
            searchInputClasses.push('active');
        }
        return (
            <div className="header">
                <div className="fa fa-bars menuIcon"></div>
                <span className="title">{ this.props.title }</span>
                <input
                    type="text"
                    className={ searchInputClasses.join(' ') }
                    placeholder="Search ..." />
                <div className="fa fa-search searchIcon" onClick={ this.toggleSearch.bind(this) }></div>
            </div>
        )
    }
}

export default Header;