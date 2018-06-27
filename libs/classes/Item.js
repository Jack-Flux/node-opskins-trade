class Item {
  constructor(request) {
    this.request = request;
  }

  async getItemsById(params) {
    const items = await this.request.post('ITrade/GetItemsById/v1/', params);
    return items;
  }
  async withdrawToOpskins(params) {
    const withdraw = await this.request.post('IItem/WithdrawToOpskins/v1/', params);
    return withdraw;
  }
}

module.exports = Item;
