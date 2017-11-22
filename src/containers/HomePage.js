import React, { Component } from 'react';
import Searchfield from 'components/Searchfield';
import debounce from 'debounce-promise';
import {getUsersRepoList} from 'api';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state= {
      repo: {}
    };

  }
  onChange = (value) => {
    this.setState({
      repo: value
    });
  }
  render() {
    return (
      <div className="HomePage">
        <Searchfield valueKey="id" resetInput={false} labelKey="name" onChange={this.onChange} loadOptions={debounce(getUsersRepoList, 300)} />
        <h1>{this.state.repo.name}</h1>
      </div>
    );
  }
}

export default HomePage;
