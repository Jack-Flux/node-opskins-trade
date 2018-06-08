const OPSkinsTrade = require('../index');
const config = require('../config.json'); // create your own

const tradeBot = new OPSkinsTrade(config.opskins.apiKey, config.opskins.secret, pollData);

tradeBot.pollTrades();

tradeBot.on('incoming trade', (offer) => {
  console.log(offer);
});

tradeBot.on('sentOffer', (offer) => {
  console.log(offer);
});
