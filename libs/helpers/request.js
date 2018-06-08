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
    if (!apiKey) {
      throw new Error('Please provide a valid API Key');
    }

    this.apiKey = apiKey;
    this.base = 'https://api-trade.opskins.com';
    this.request = request.defaults({
      auth: {
        user: this.apiKey,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }

  get(path, params = {}) {
    return new Promise((resolve) => {
      this.request.get(`${this.base}/${path}${convertParams(params)}`, (err, resp, body) => resolve(JSON.parse(body)));
    });
  }
  post(path, params = {}) {
    return new Promise((resolve) => {
      this.request.post({
        url: `${this.base}/${path}`,
        form: params,
      }, (err, resp, body) => resolve(JSON.parse(body)));
    });
  }
  test() {
    this.post('ITest/TestAuthed/v1').then(data => console.log(data));
  }
}

module.exports = OPRequest;
