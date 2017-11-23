import React from 'react';

const SearchResults = ({data, keyLabel, valueLabel, onSelect}) => (
  <div className="SearchResults">
    {data.map(result => {
      return (
        <div key={result[keyLabel]} onClick={() => { onSelect(result) }}>
          {result[valueLabel]}
        </div>
      )
    })}
  </div>
);

export default SearchResults;
