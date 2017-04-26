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
        const menuIconStyle = { color: '#333333' };
        const headerInlineStyles = { borderBottom: '3px solid #333333' };
        return (
            <div className="header" id="header" style={ headerInlineStyles }>
                <div className="fa fa-bars menuIcon" style={ menuIconStyle }></div>
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

Header.propTypes = {
    title: React.PropTypes.string
};

Header.defaultProps = {
    title: 'Github activity'
};

export default Header;