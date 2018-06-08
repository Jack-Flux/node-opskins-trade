class User {
  constructor(request) {
    this.request = request;
  }

  getInventory(params) {
    return new Promise(async (resolve) => {
      const inventory = await this.request.get('IUser/GetInventory/v1', params);
      resolve(inventory);
    });
  }
  getProfile(params) {
    return new Promise(async (resolve) => {
      const profile = await this.request.get('IUser/GetProfile/v1', params);
      resolve(profile);
    });
  }
  updateProfile(params) {
    return new Promise(async (resolve) => {
      const profile = await this.request.post('IUser/UpdateProfile/v1', params);
      resolve(profile);
    });
  }
}

module.exports = User;
