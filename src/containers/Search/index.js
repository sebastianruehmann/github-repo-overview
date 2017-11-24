import React, { Component } from 'react';
import SearchField from 'components/SearchField';
import SearchResults from 'components/SearchResults';
import './Search.css';
import cancel from 'images/cancel.svg';

const initialState = {
    search: ''
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  onSearchUpdated = (search) => {
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

        {this.props.results < 0 || this.props.error &&
          <div className="SearchResults-error">
            {this.props.error || this.props.noResultsMsg}
          </div>
        }
      </div>
    );
  }
}

export default Search;
