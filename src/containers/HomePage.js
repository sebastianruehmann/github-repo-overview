import React, { Component } from 'react';
import SearchField from 'components/SearchField';
import SearchResults from 'components/SearchResults';
import LineChart from 'components/LineChart';
import contributorsChartOptions from 'utils/contributorsChartOptions';
import {niceErrorHandling, getSearchedUsersRepoList, getReposContributorsList} from 'api';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      repos: [],
      errors: null,
      repo: undefined,
      contributors: [],
      options: contributorsChartOptions,
      chart: undefined
    };

    niceErrorHandling();
  }
  formatContributorsData(contributors) {
    this.setState({
      chart: {
        labels: contributors.map(c => c.login),
        datasets: [{
          data: contributors.map(c => c.contributions),
          fill: false
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
      repo: repo,
      repos: []
    });
    this.loadContributors(repo);
  }
  searchUpdated = async (search) => {
    if(!search) {
      return;
    }
    try {
      this.setState({
        repos: await getSearchedUsersRepoList(search)
      });
    } catch(e) {
      this.setState({
        repos: [],
        errors: e
      });
    }
  }
  render() {
    return (
      <div className="HomePage">
        <SearchField placeholder="Search for github username.." onChange={this.searchUpdated} />
        <SearchResults onSelect={this.onChange} data={this.state.repos} valueLabel="name" keyLabel="id" />

        {this.state.repos < 0 || this.state.errors &&
          <div className="SearchResults-empty">
            {this.state.errors}
          </div>
        }

        {this.state.repo &&
          <h2>{this.state.repo.name}</h2>
        }
        {this.state.chart &&
          <LineChart data={this.state.chart} options={this.state.options} />
        }
      </div>
    );
  }
}

export default HomePage;
