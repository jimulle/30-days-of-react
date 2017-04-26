import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }

    updateSearchInput(event) {
        this.setState({
            searchText: event.target.value
        });
    }

    submitForm(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.searchText);
    }

    render() {
        let searchInputClasses = ['searchInput'];
        if (this.props.visible) {
            searchInputClasses.push('active');
        }
        return (
            <form onSubmit={ this.submitForm.bind(this) }>
                <input
                    type="text"
                    value={ this.state.searchText }
                    className={ searchInputClasses.join(' ') }
                    onChange={ this.updateSearchInput.bind(this) }
                    placeholder="Search ..." />
            </form>
        );
    }
}

SearchForm.propTypes = {
    visible: React.PropTypes.bool,
    onSubmit: React.PropTypes.func.isRequired
};

SearchForm.defaultProps = {
    visible: false,
    onSubmit: () => {}   // prevent explosions
};

export default SearchForm;