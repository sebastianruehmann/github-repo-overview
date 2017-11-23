import React from 'react';
import SearchInput from 'react-search-input'
import './SearchField.css';

const SearchField = ({value, placeholder, onChange}) => (
  <div className="SearchField">
    <SearchInput placeholder={placeholder} className="SearchField-input" throttle={300} onChange={onChange} />
  </div>
);

export default SearchField;
