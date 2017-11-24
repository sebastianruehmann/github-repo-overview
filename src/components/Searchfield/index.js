import React from 'react';
import SearchInput from 'react-search-input'
import './SearchField.css';
import search from 'images/search.svg';

const SearchField = ({value, placeholder, onChange}) => (
  <div className="SearchField">
    <span className="SearchField-icon">
      <img src={search} alt="Search icon" />
    </span>
    <SearchInput value={value} placeholder={placeholder} className="SearchField-input" throttle={300} onFocus={e => { onChange(e.target.value) }} onChange={onChange} />
  </div>
);

export default SearchField;
