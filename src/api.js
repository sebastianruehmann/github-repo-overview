import axios from 'axios';

export const getUserList = async(input) => {
  if (!input) {
    return Promise.reject([]);
  }

  return await axios.get('https://api.github.com/search/users?q='+ input +'+in:login').then(userRequest => {
    return userRequest.data;
  });
}

export const getRepoList = async (user) => {
  if(!user || !user.repos_url) {
    return Promise.reject();
  }

  return await axios.get(user.repos_url).then(repos => {
    return repos.data;
  });
}

export const getUsersRepoList = async(input) => {
  let users = {
    items: [{}]
  };

  users = await getUserList(input);

  if(users.items[0].login == input) {
    return getRepoList(users.items[0])
      .then(repos => {
        return {options: repos};
      });
  }

  return Promise.resolve({options: [] });
}
