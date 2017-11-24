import React, { Component } from 'react';
import Search from 'containers/Search';
import LineChart from 'components/LineChart';
import contributorsChartOptions from 'utils/contributorsChartOptions';
import {niceErrorHandling, getSearchedUsersRepoList, getReposContributorsList} from 'api';

const initialState = {
  repos: [],
  repo: undefined,
  contributors: [],
  options: contributorsChartOptions,
  chart: undefined,
  error: ''
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    niceErrorHandling();
  }
  formatContributorsData(contributors) {
    this.setState({
      chart: {
        labels: (Array.isArray(contributors)) ? contributors.map(c => c.login) : contributors,
        datasets: [{
          data: (Array.isArray(contributors)) ? contributors.map(c => c.contributions) : contributors,
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
  onSelect = (repo) => {
    this.setState({
      repo: repo,
      repos: []
    });
    this.loadContributors(repo);
  }
  onSearchUpdated = async (search) => {
    try {
      this.setState({
        error: '',
        repos: await getSearchedUsersRepoList(search)
      });
    } catch(e) {
      this.setState({
        repos: [],
        error: e
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
          <Search results={this.state.repos}
            placeholder="Search for github username.."
            onSearchUpdated={this.onSearchUpdated}
            onSearchReseted={this.onSearchReseted}
            onSelect={this.onSelect}
            valueLabel="name"
            keyLabel="id"
            error={this.state.error}
            noResultsMsg="No Repos"
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
