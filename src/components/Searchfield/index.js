import search from 'images/search.svg';
import React from 'react';
import SearchInput from 'react-search-input';
import './SearchField.css';
import propTypes from 'prop-types';

const SearchField = ({ value, placeholder, onChange }) => (
  <div className="SearchField">
    <span className="SearchField-icon">
      <img src={search} alt="Search icon" />
    </span>
    <SearchInput value={value} placeholder={placeholder} className="SearchField-input" throttle={300} onFocus={e => { onChange(e.target.value); }} onChange={onChange} />
  </div>
);

SearchField.propTypes = {
  value: propTypes.string,
  placeholder: propTypes.string,
  onChange: propTypes.func
};

export default SearchField;
