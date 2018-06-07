class Item {
  constructor(request) {
    this.request = request;
  }

  getItemsById(params) {
    return new Promise(async (resolve) => {
      const items = this.request.post('ITrade/GetItemsById/v1/', params);
      resolve(items);
    });
  }
  withdrawToOpskins(params) {
    return new Promise(async (resolve) => {
      const withdraw = this.request.post('ITem/WithdrawToOpskins/v1/', params);
      resolve(withdraw);
    });
  }
}

module.exports = Item;