const request = require('request');

const convertParams = (params) => {
  let paramString = Object.keys(params).length > 0 ? '?' : '';
  Object.keys(params).forEach((key) => {
    paramString += `${key}=${params[key]}&`;
  });
  return paramString;
};

class OPRequest {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.base = 'https://api-trade.opskins.com';
    this.request = request.defaults({
      auth: {
        user: this.apiKey,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }

  get(path, params = {}, headers = {}) {
    return new Promise((resolve) => {
      this.request.get({
        url: `${this.base}/${path}${convertParams(params)}`,
        headers,
      }, (err, resp, body) => resolve(JSON.parse(body)));
    });
  }
  post(path, params = {}) {
    return new Promise((resolve) => {
      this.request.post({
        url: `${this.base}/${path}`,
        form: params,
        headers,
      }, (err, resp, body) => resolve(JSON.parse(body)));
    });
  }
}

module.exports = OPRequest;
