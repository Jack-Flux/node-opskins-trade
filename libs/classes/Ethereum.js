class Ethereum {
  constructor(request) {
    this.request = request;
  }

  async getContractAddress() {
    const address = await this.request.get('IEthereum/GetContractAddress/v1', {});
    return address;
  }
}

module.exports = Ethereum;