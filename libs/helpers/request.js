const request = require('request');

class OPRequest {
  constructor(api_key) {
    this.api_key = api_key;
    this.auth_hash = (new Buffer(this.api_key + ":", 'ascii')).toString('base64');
    this.base = 'https://api-trade.opskins.com';
    this.request = request.defaults({
      headers: {
        'Authorization': `Basic ${this.auth_hash}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
  }
  send(path, options = {}) {
    return new Promise((resolve) => {
      this.request.post(`${this.base}/${path}`, options, (err, resp, body) => {
        resolve(body);
      });
    });
  }
  test() {
    this.send('ITest/TestAuthed/v1').then((data) => console.log(data));
  }
}

module.exports = OPRequest;