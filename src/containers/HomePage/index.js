import React, { Component } from 'react';
import Search from 'containers/Search';
import LineChart from 'components/LineChart';
import contributorsChartOptions from 'utils/contributorsChartOptions';
import { niceErrorHandling, getSearchedUsersRepoList, getReposContributorsList } from 'api';
import './HomePage.css';
import kenobi from 'images/kenobi.png';

const initialState = {
  repos: [],
  repo: null,
  contributors: [],
  options: contributorsChartOptions,
  chart: null,
  error: null
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    niceErrorHandling();
  }
  formatContributorsData(contributors) {
    return {
      labels: (Array.isArray(contributors)) ? contributors.map(c => c.login) : [],
      datasets: [{
        data: (Array.isArray(contributors)) ? contributors.map(c => c.contributions) : [],
        fill: false
      }]
    };
  }
  formatUserNotFoundError(error) {
    return error.message = '<div class="SearchResults-error-noUser">' +
      '<img src="' + kenobi +'" height="50"/><span>“' + error.message + '”</span>' +
      '</div>';
  }
  async loadContributors(repo) {
    let contributors = [];
    contributors = await getReposContributorsList(repo);
    const chart = this.formatContributorsData(contributors);
    this.setState({
      contributors,
      chart
    });
  }
  onSelect = repo => {
    this.setState({
      repo,
      repos: []
    });
    this.loadContributors(repo);
  }
  onSearchUpdated = async (search) => {
    try {
      this.setState({
        error: null,
        repos: await getSearchedUsersRepoList(search)
      });
    } catch(error) {
      if(error.type === 'NO_USER_FOUND') {
        error.message = this.formatUserNotFoundError(error);
      }
      this.setState({
        error: error.message,
        repos: []
      });
    }
  }
  onSearchReseted = () => {
    this.setState(initialState);
  }
  render() {
    return (
      <div className="HomePage">
        <div className="HomePage-search">
          <Search
            results={this.state.repos}
            placeholder="Search for github username.."
            onSearchUpdated={this.onSearchUpdated}
            onSearchReseted={this.onSearchReseted}
            onSelect={this.onSelect}
            valueLabel="name"
            keyLabel="id"
            error={this.state.error}
          />
        </div>
        <div className="HomePage-content">
          {this.state.repo &&
            <h2 className="HomePage-content-title">{this.state.repo.name}</h2>
          }
          {this.state.chart &&
            <LineChart data={this.state.chart} options={this.state.options} />
          }
        </div>
      </div>
    );
  }
}

export default HomePage;
