class Trade {
  constructor(request) {
    this.request = request;
  }

  acceptOffer(params) {
    return new Promise(async (resolve) => {
      const offer = await this.request.post('ITrade/AcceptOffer/v1/', params);
      resolve(offer);
    });
  }
  cancelOffer(params) {
    return new Promise(async (resolve) => {
      const offer = await this.request.post('ITrade/CancelOffer/v1/', params);
      resolve(offer);
    });
  }
  getApps() {
    return new Promise(async (resolve) => {
      const apps = await this.request.get('ITrade/GetApps/v1/', {});
      resolve(apps);
    });
  }
  getOffer(params) {
    return new Promise(async (resolve) => {
      const offer = await this.request.get('ITrade/GetOffer/v1/', params);
      resolve(offer);
    });
  }
  getOffers(params) {
    return new Promise(async (resolve) => {
      const offers = await this.request.get('ITrade/GetOffers/v1/', params);
      resolve(offers);
    });
  }
  getTradeURL() {
    return new Promise(async (resolve) => {
      const tradeURL = await this.request.get('ITrade/GetTradeURL/v1/', {});
      resolve(tradeURL);
    });
  }
  getUserInventory(params) {
    return new Promise(async (resolve) => {
      const inventory = await this.request.get('ITrade/GetUserInventory/v1/', params);
      resolve(inventory);
    });
  }
  getUserInventoryFromSteamId(params) {
    return new Promise(async (resolve) => {
      const inventory = await this.request.get('ITrade/GetUserInventoryFromSteamId/v1/', params);
      resolve(inventory);
    });
  }
  regenerateTradeURL() {
    return new Promise(async (resolve) => {
      const tradeURL = await this.request.post('ITrade/RegenerateTradeURL/v1/', {});
      resolve(tradeURL);
    });
  }
  sendOffer(params) {
    return new Promise(async (resolve) => {
      const offer = await this.request.post('ITrade/SendOffer/v1/', params);
      resolve(offer);
    });
  }
  sendOfferToSteamId(params) {
    return new Promise(async (resolve) => {
      const offer = await this.request.post('ITrade/SendOfferToSteamId/v1/', params);
      resolve(offer);
    });
  }
}

module.exports = Trade;
