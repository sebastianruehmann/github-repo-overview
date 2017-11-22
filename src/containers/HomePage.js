import React, { Component } from 'react';
import Searchfield from 'components/Searchfield';
import LineChart from 'components/LineChart';
import debounce from 'debounce-promise';
import contributorsChartOptions from 'utils/contributorsChartOptions';
import {getReposContributorsList, getUsersRepoList} from 'api';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: undefined,
      contributors: [],
      options: contributorsChartOptions,
      chart: undefined
    };
  }
  getPropertyOfObject(array, property) {
    return array.map(item => {
      return item[property];
    });
  }
  formatContributorsData(contributors) {
    this.setState({
      chart: {
        labels: contributors.map(c => c.login),
        datasets: [{
          data: contributors.map(c => c.contributions)
        }]
      }
    });
  }
  async loadContributors(repo) {
    let contributors = [];
    contributors = await getReposContributorsList(repo);
    this.formatContributorsData(contributors);
    this.setState({
      contributors: contributors
    });
  }
  onChange = (repo) => {
    this.setState({
      repo: repo
    });
    this.loadContributors(repo);
  }
  render() {
    return (
      <div className="HomePage">
        <Searchfield valueKey="id" resetInput={false} labelKey="name" onChange={this.onChange} loadOptions={debounce(getUsersRepoList, 300)} />
        {this.state.repo &&
          <h1>{this.state.repo.name}</h1>
        }
        {this.state.chart &&
          <LineChart data={this.state.chart} options={this.state.options} width={100} height={30} />
        }
      </div>
    );
  }
}

export default HomePage;
