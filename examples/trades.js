const OPSkinsTrade = require('../index');
const config = require('../config.json'); // create your own

const tradeBot = new OPSkinsTrade(config.opskins.apiKey, config.opskins.secret);

tradeBot.pollTrades();

tradeBot.on('newOffer', (offer) => {
  console.log(offer);
});

tradeBot.on('sentOffer', (offer) => {
  console.log(offer);
});

tradeBot.on('offerUpdated', (offer) => {
  console.log(offer);
});

tradeBot.getUserInventory('76561198050589312').then(data => console.log(data));
