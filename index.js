class OPSkinsTrade {
  constructor(api_key) {
    this.api_key = api_key;
    this.request = new (require('./libs/helpers/request'))(api_key);
  }
}

module.exports = OPSkinsTrade;