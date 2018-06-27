class CaseSite {
  constructor(request) {
    this.request = request;
  }

  async getKeyCount(params) {
    const keyCount = await this.request.get('ICaseSite/GetKeyCount/v1', params);
    return keyCount;
  }
  async getTradeStatus(params) {
    const status = await this.request.get('ICaseSite/GetTradeStatus/v1', params);
    return status;
  }
  async sendKeyRequest(params) {
    const offer = await this.request.get('ICaseSite/SendKeyRequest/v1', params);
    return offer;
  }
}

module.exports = CaseSite;