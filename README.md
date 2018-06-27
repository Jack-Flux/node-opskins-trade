# Trade offer management library for Trade.OPSkins.com
# Usage

```js
const OPSkinsTrade = require('node-opskins-trade');

const tradeBot = new OPSkinsTrade('your-api-key', 'your-2fa-secret');

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
```
For further documentation please click [here](https://github.com/OPSkins/trade-opskins-api).
