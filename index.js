class OPSkinsTrade {
  constructor(api_key) {
    this.api_key = api_key;
    this.request = new (require('./libs/helpers/request'))(api_key);
    this.Item = new (require('./libs/classes/Item'))(this.request);
    this.Trade = new (require('./libs/classes/Trade'))(this.request);
    this.User = new (require('./libs/classes/User'))(this.request);
  }
}

module.exports = OPSkinsTrade;