class CaseSite {
  constructor(request) {
    this.request = request;
  }

  async getKeyCount(params, auth) {
    const keyCount = await this.request.get('ICaseSite/GetKeyCount/v1', params, auth);
    return keyCount;
  }
  async getTradeStatus(params, auth) {
    const status = await this.request.get('ICaseSite/GetTradeStatus/v1', params, auth);
    return status;
  }
  async sendKeyRequest(params, auth) {
    const offer = await this.request.post('ICaseSite/SendKeyRequest/v1', params, auth);
    return offer;
  }
}

module.exports = CaseSite;