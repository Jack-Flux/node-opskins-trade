const EventEmitter = require('events');
const authenticator = require('authenticator');
const Request = require('./libs/helpers/request');
const Item = require('./libs/classes/Item');
const Trade = require('./libs/classes/Trade');
const User = require('./libs/classes/User');

const sleep = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms));

class OPSkinsTrade extends EventEmitter {
  constructor(api_key, secret, polling = 1000) {
    super();
    this.request = new Request(api_key);
    this.Item = new Item(this.request);
    this.Trade = new Trade(this.request);
    this.User = new User(this.request);
    this.api_key = api_key;
    this.secret = secret;
    this.polling = polling;
    this.polledTrades = {};
  }

  async pollTrades() {
    const offers = (await this.Trade.getOffers()).response.offers;
    offers.forEach((offer) => {
      if (!this.polledTrades[offer.id]) {
        this.polledTrades[offer.id] = offer;
        this.emit('incoming trade', offer);
      }
    });
    await sleep(this.polling);
    this.pollTrades();
  }
  generateTwoFactor() {
    return authenticator.generateToken(this.secret);
  }
}

module.exports = OPSkinsTrade;