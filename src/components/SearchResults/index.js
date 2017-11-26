import React from 'react';
import './SearchResults.css';

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

export default SearchResults;
