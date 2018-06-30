class Case {
  constructor(request) {
    this.request = request;
  }

  async getCaseSchema(params) {
    const schema = await this.request.get('ICase/GetCaseSchema/v1', params);
    return schema;
  }
  async getMinimumOpenVolume() {
    const volume = await this.request.get('ICase/GetMinimumOpenVolume/v1', {});
    return volume;
  }
  async openWithKeys(params, headers) {
    const cases = await this.request.post('ICase/OpenWithKeys/v1', params, headers);
    return cases;
  }
}

module.exports = Case;