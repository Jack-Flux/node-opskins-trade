class Trade {
  constructor(request) {
    this.request = request;
  }

  async acceptOffer(params) {
    const offer = await this.request.post('ITrade/AcceptOffer/v1/', params);
    return offer;
  }
  async cancelOffer(params) {
    const offer = await this.request.post('ITrade/CancelOffer/v1/', params);
    return offer;
  }
  async getApps() {
    const apps = await this.request.get('ITrade/GetApps/v1/', {});
    return apps
  }
  async getOffer(params) {
    const offer = await this.request.get('ITrade/GetOffer/v1/', params);
    return offer
  }
  async getOffers(params) {
    const offers = await this.request.get('ITrade/GetOffers/v1/', params);
    return offers;
  }
  async getTradeURL() {
    const tradeURL = await this.request.get('ITrade/GetTradeURL/v1/', {});
    return tradeURL;
  }
  async getUserInventory(params) {
    const inventory = await this.request.get('ITrade/GetUserInventory/v1/', params);
    return inventory;
  }
  async getUserInventoryFromSteamId(params) {
    const inventory = await this.request.get('ITrade/GetUserInventoryFromSteamId/v1/', params);
    return inventory;
  }
  async regenerateTradeURL() {
    const tradeURL = await this.request.post('ITrade/RegenerateTradeURL/v1/', {});
    return tradeURL;
  }
  async sendOffer(params) {
    const offer = await this.request.post('ITrade/SendOffer/v1/', params);
    return offer;
  }
  async sendOfferToSteamId(params) {
    const offer = await this.request.post('ITrade/SendOfferToSteamId/v1/', params);
    return offer;
  }
}

module.exports = Trade;
