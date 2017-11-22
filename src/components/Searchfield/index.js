import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const Searchfield = ({value, labelKey, resetInput, loadOptions, onChange}) => (
  <div className="Searchfield">
    <Select.Async value={value} onSelectResetsInput={resetInput} onCloseResetsInput={resetInput} onBlurResetsInput={resetInput} labelKey={labelKey} onChange={onChange} loadOptions={loadOptions} />
  </div>
);

export default Searchfield;
