const EventEmitter = require('events');
const authenticator = require('authenticator');
const Request = require('./libs/helpers/request');
const Item = require('./libs/classes/Item');
const Trade = require('./libs/classes/Trade');
const User = require('./libs/classes/User');

const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

class OPSkinsTrade extends EventEmitter {
  constructor(apiKey, secret, polling = 1000) {
    if (!apiKey || !secret) {
      throw new Error(`Please provide a valid ${apiKey ? 'secret' : 'API key'}`);
    }
    super();
    this.request = new Request(apiKey);
    this.Item = new Item(this.request);
    this.Trade = new Trade(this.request);
    this.User = new User(this.request);
    this.api_key = apiKey;
    this.secret = secret;
    this.polling = polling;
    this.pollData = {};
  }

  generateTwoFactor() {
    return authenticator.generateToken(this.secret);
  }

  async pollTrades() {
    const fetchTrades = await this.Trade.getOffers();
    const { offers } = fetchTrades.response;

    offers.forEach((offer) => {
      if (offer.id in this.pollData) {
        if (this.pollData[offer.id] !== offer.state) {
          this.emit('offerUpdated', offer);
        }
        return;
      }
      this.pollData[offer.id] = offer.state;
      this.emit('newOffer', offer);
    });

    await sleep(this.polling);
    this.pollTrades();
  }

  getUserInventory(steamid) {
    return this.Trade.getUserInventoryFromSteamId({ steam_id: steamid, app_id: '2' });
  }

  async sendOffer(steamid, items) {
    const _send = await this.Trade.sendOfferToSteamId({
      twofactor_code: this.generateTwoFactor(),
      steam_id: steamid,
      items,
    });
    if (_send.status != 1) {
        throw _send;
    }
    const { offer } = _send.response;
    this.pollData[offer.id] = offer.state;
    this.emit('sentOffer', offer);
    return offer;
  }

  async acceptOffer(offerId) {
    const _accept = await this.Trade.acceptOffer({
      twofactor_code: this.generateTwoFactor(),
      offer_id: offerId,
    });
    const { offer } = _accept.response;
    this.pollData[offer.id] = offer;
    this.emit('offerUpdated', offer);
    return offer;
  }
}

module.exports = OPSkinsTrade;
