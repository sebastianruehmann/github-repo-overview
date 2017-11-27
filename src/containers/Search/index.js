import React, { Component } from 'react';
import SearchField from 'components/SearchField';
import SearchResults from 'components/SearchResults';
import cancel from 'images/cancel.svg';
import './Search.css';
import propTypes from 'prop-types';

const initialState = {
    search: ""
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  onSearchUpdated = search => {
    this.setState({
      search: search
    });
    if(!search) {
      return;
    }
    this.props.onSearchUpdated(search);
  }
  onSearchReseted = () => {
    this.setState(initialState);
    this.props.onSearchReseted();
  }
  render() {
    return (
      <div className="SearchWrapper">
        <SearchField value={this.state.search} placeholder={this.props.placeholder} onChange={this.onSearchUpdated} />
        {this.state.search &&
          <span className="SearchField-reset" onClick={this.onSearchReseted}>
            <img src={cancel} alt="Reset search" />
          </span>
        }
        <SearchResults onSelect={this.props.onSelect} data={this.props.results} valueLabel={this.props.valueLabel} keyLabel={this.props.keyLabel} />
        {this.props.error &&
          <div className="SearchResults-error" dangerouslySetInnerHTML={{ __html: this.props.error }} />
        }
      </div>
    );
  }
}

SearchResults.propTypes = {
  onSearchReseted: propTypes.func,
  results: propTypes.array,
  placeholder: propTypes.string,
  onSearchUpdated: propTypes.func,
  onSelect: propTypes.func,
  valueLabel: propTypes.string,
  keyLabel: propTypes.string,
  error: propTypes.string
};

export default Search;
