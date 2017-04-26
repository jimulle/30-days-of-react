import React, { Component } from 'react';
import SearchForm from './search-form/SearchForm';

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

    handleSearch(value) {
        this.props.onSearch(value);
    }

    render() {
        const menuIconStyle = { color: '#333333' };
        const headerInlineStyles = { borderBottom: '3px solid #333333' };
        return (
            <div className="header" id="header" style={ headerInlineStyles }>
                <div className="fa fa-bars menuIcon" style={ menuIconStyle }></div>
                <span className="title">{ this.props.title }</span>
                <SearchForm
                    visible={ this.state.searchVisible }
                    onSubmit={ this.handleSearch.bind(this) } />
                <div className="fa fa-search searchIcon" onClick={ this.toggleSearch.bind(this) }></div>
            </div>
        )
    }
}

Header.propTypes = {
    title: React.PropTypes.string,
    onSearch: React.PropTypes.func
};

Header.defaultProps = {
    title: 'Github activity'
};

export default Header;