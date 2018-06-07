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

  params(inputs) {
    let params = Object.keys(inputs).length > 0 ? '?' : '';
    Object.keys(inputs).forEach((key) => params += `${key}=${inputs[key]}&`);
    return params;
  }

  get(path, inputs = {}) {
    return new Promise((resolve) => {
      const params = this.params(inputs);
      this.request.get(`${this.base}/${path}${params}`, (err, resp, body) => resolve(JSON.parse(body)));
    });
  }

  post(path, inputs = {}) {
    return new Promise((resolve) => {
      this.request.post({
        url: `${this.base}/${path}`,
        form: inputs,
      }, (err, resp, body) => resolve(JSON.parse(body)));
    });
  }

  test() {
    this.post('ITest/TestAuthed/v1').then((data) => console.log(data));
  }
}

module.exports = OPRequest;