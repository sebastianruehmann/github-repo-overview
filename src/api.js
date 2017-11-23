import axios from 'axios';

export const niceErrorHandling = () => {
  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error.response.data.message);
  });
}
export const searchUserLogins = (input) => {
  if (!input) {
    return Promise.reject("No search value given");
  }

  return axios.get('https://api.github.com/search/users?q='+ input +'+in:login').then(userRequest => {
    return userRequest.data;
  });
}

export const getReposContributorsList = (repo) => {
  if(!repo || !repo.contributors_url) {
    return Promise.reject();
  }

  return axios.get(repo.contributors_url).then(contributors => {
    return contributors.data;
  });
}

export const getUsersRepoList = (user) => {
  if(!user || !user.repos_url) {
    return Promise.reject();
  }

  return axios.get(user.repos_url).then(repos => {
    return repos.data;
  });
}

export const getSearchedUsersRepoList = async (input) => {
  let users = {
    items: [{}]
  };

  users = await searchUserLogins(input);

  if(users.items.length && users.items[0].login === input) {
    return getUsersRepoList(users.items[0]);
  }

  return Promise.reject("These are not the repos you are looking for");
}
