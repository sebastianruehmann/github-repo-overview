import React from 'react';
import './SearchResults.css';
import propTypes from 'prop-types';

const SearchResults = ({
  data, keyLabel, valueLabel, onSelect
}) => (
  <ul className="SearchResults">
    {data.map(result => {
      return (
        <li className="SearchResults-item" key={result[keyLabel]} onClick={() => { onSelect(result); }}>
          {result[valueLabel]}
        </li>
      )
    })}
  </ul>
);


SearchResults.propTypes = {
  data: propTypes.object,
  keyLabel: propTypes.string,
  valueLabel: propTypes.string,
  onSelect: propTypes.func
};

export default SearchResults;
