# An API wrapper for trade.OPSkins.com

For further documentation please click [here](https://github.com/OPSkins/trade-opskins-api).

# Usage

```js
const OPSkinsTrade = require('trade-opskins-wrapper');

const tradeBot = new OPSkinsTrade('your-api-key');

tradeBot.Trade.sendOffer({
  twofactor_code: 'your-2fa-code',
  uid: 'partners-userid',
  token: 'partner-token',
  items: [], // A list of item ids you wish to include in trade offer. There should be both yours and your partners items. 
}).then((offer) => {
  console.log(offer);
});
```

# Contents
- [Item methods](#item-methods-)
- [Trade methods](#trade-methods-)
- [User methods](#user-methods-)
# Item methods [^](#contents)
#### getItemsById({ params })

Parameters

Parameter | Type | Required   | Description
--------- | -----| :--------: | -----------
item_id| int-csv | - | item id filter, separated with comma

Output

Parameter | Type | Description
--------- | ---- | -----------
items | object | [Standard Item Object](/IItem.md#standard-item-object)

#### withdrawToOpskins({ params })

Parameters

Parameter | Type | Required   | Description
--------- | -----| :--------: | -----------
item_id| int-csv | - | item id filter, separated with comma

Output

Parameter | Type | Description
--------- | ---- | -----------
results | object | Result from OPSkins API
output | object | Archived items
-uid | int | OPSkins UID
-items | object | Archived items
--appid | int | Steam App ID
--contextid | int | Steam Context ID
--market_name | string | Market name
--owner_uid | int | OPSkins UID
--wear | float | Wear float value
--original_sale_id | int | Original sale ID on OPSkins

# Trade methods [^](#contents)
# User methods [^](#contents)
# Item methods [^](#contents)
