import cloneDeep from 'lodash.clonedeep';
import StoreModule from '../module';

const AUTH_TOKEN = 'YLab-shop-token';

export default class User extends StoreModule {
  initState() {
    return {
      authStatus: 'NoAuth',
      userInfo: null
    }
  }

  async login({login, password}) {
    const data = JSON.stringify({login, password});
    const response = await fetch('/api/v1/users/sign', {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json'
      }
    });
    const json = await response.json();
    localStorage.setItem(AUTH_TOKEN, json.result.token);
    this.setState({
      ...this.getState(),
      userInfo: json.result.user,
      authStatus: 'Auth',
    });
  }

  async logout() {
    await fetch('/api/v1/users/sign', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'X-Token': localStorage.getItem(AUTH_TOKEN),
      }
    }),
    this.setState({
      ...getState,
      userInfo: null,
      authStatus: 'NoAuth'
    })
  }

  async checkAuth() {
    const response = await fetch('/api/v1/users/self', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'X-Token': localStorage.getItem(AUTH_TOKEN),
      }
    })
    const json = await response.json();
    this.setState({
      ...this.getState(),
      userInfo: json.result,
      authStatus: 'Auth',
    })
  }
}