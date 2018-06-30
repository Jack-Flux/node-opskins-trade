class CaseSite {
  constructor(request) {
    this.request = request;
  }

  async getKeyCount(params, headers) {
    const keyCount = await this.request.get('ICaseSite/GetKeyCount/v1', params, headers);
    return keyCount;
  }
  async getTradeStatus(params, headers) {
    const status = await this.request.get('ICaseSite/GetTradeStatus/v1', params, headers);
    return status;
  }
  async sendKeyRequest(params, headers) {
    const offer = await this.request.post('ICaseSite/SendKeyRequest/v1', params, headers);
    return offer;
  }
}

module.exports = CaseSite;