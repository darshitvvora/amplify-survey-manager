import axios from 'axios';

//import session from './session.service';



class HTTPService {
  constructor() {
    this._instance = axios.create({
      //baseURL: "https://w6eakr17z5.execute-api.ap-south-1.amazonaws.com/default",
    });
  }

  
  
 // setToken(token) {
  //  this._instance.defaults.headers.common['authorization'] = token;
 ///\ }

  formatError(err) {
    return { status: err.status, ...err.data };
  }

  async get(url, query) {
    return this._instance({
      method: 'get',
      url,
      params: query
    })
      .then((res) => res.data)
      .catch((err) => Promise.reject(this.formatError(err.response)));
  }

  async post(url, data) {
    return this._instance({
      method: 'post',
      url,
      data,
    })
      .then((res) => res)
      .catch((err) => Promise.reject(this.formatError(err.response)));
  }
}

const httpService = new HTTPService();

//if (session.isLoggedIn) {
//  httpService.setToken(session.getItem('token'));
//}

export default httpService;
