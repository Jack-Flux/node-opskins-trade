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
  async openWithKeys(params) {
    const cases = await this.request.get('ICase/OpenWithKeys/v1', params);
    return cases;
  }
}

module.exports = Case;