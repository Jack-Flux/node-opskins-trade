const request = require('request');

class OPRequest {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error('Please provide a valid API Key');
    }

    this.auth_hash = (new Buffer(apiKey + ":", 'ascii')).toString('base64');
    this.base = 'https://api-trade.opskins.com';
    this.request = request.defaults({
      headers: {
        'Authorization': `Basic ${this.auth_hash}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
  }

  convertParams(params) {
    let paramString = Object.keys(params).length > 0 ? '?' : '';
    Object.keys(params).forEach((key) => params += `${key}=${params[key]}&`);
    return paramString;
  }
  get(path, params = {}) {
    return new Promise((resolve) => {
      this.request.get(`${this.base}/${path}${this.convertParams(params)}`, (err, resp, body) => resolve(JSON.parse(body)));
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
    this.post('ITest/TestAuthed/v1').then((data) => console.log(data));
  }
}

module.exports = OPRequest;