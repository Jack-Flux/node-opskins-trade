class OPSkinsTrade {
  constructor(api_key) {
    this.api_key = api_key;
    this.request = new (require('./libs/helpers/request'))(api_key);
    this.IItem = new (require('./libs/classes/Item'))(this.request);
    this.ITrade = new (require('./libs/classes/Trade'))(this.request);
    this.IUser = new (require('./libs/classes/User'))(this.request);
  }
}

module.exports = OPSkinsTrade;