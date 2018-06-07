# An API wrapper for trade.OPSkins.com
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
- [Item Methods](#item-methods-)
- [Trade Methods](#trade-methods-)
- [User Methods](#user-methods-)
- [Standard Item Object](#standard-item-object)
- [Standard Trade Offer Object](#standard-trade-offer-object)
- [Standard Public Profile Object](#standard-public-profile-object)
- [Offer states](#offer-states-)
# Item Methods [^](#contents)
#### getItemsById({ params })
Parameters

Parameter | Type | Required   | Description
--------- | -----| :--------: | -----------
item_id| int-csv | - | item id filter, separated with comma

Response

Parameter | Type | Description
--------- | ---- | -----------
items | object | [Standard Item Object](#standard-item-object)

#### withdrawToOpskins({ params })
Parameters

Parameter | Type | Required   | Description
--------- | -----| :--------: | -----------
item_id| int-csv | - | item id filter, separated with comma

Response

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

# Trade Methods [^](#contents)
### acceptOffer({ params })
Parameters

Parameter | Type | Required   | Description
--------- | -----| :--------: | -----------
twofactor_code | string | + | 2-factor authentication code
offer_id | int | + | Trade offer Id you want to accept

Response

Parameter | Type | Description
--------- | -----| -------- 
offer     | object    | [Standard Trade Offer Object](#standard-trade-offer-object)
new items | array-object | items, new for the recipient (user that makes this API call). [Standard Item Object](#standard-item-object)

### cancelOffer({ params })
Parameters

Parameter | Type | Required   | Description
--------- | -----| :--------: | -----------
offer_id | int |  + | Offer ID that you're a party to (sender or receiver)

Response

Parameter | Type | Description
--------- | -----| -------- 
offer     | object    | [Standard Trade Offer Object](#standard-trade-offer-object)

### getApps()
Response

Parameter | Type | Description
--------- | -----| -------- 
apps | object | List of apps and descriptions
--internal_app_id | int | Internal App ID
--steam_app_id | int | Steam App ID
--steam_context_id | int | Steam Context ID
--name | string | Short name of app
--long_name | string | Long name of app
--img | string | Image URL of app icon
--default | int | If property exists, this is the default app. Not outputted for other apps.

### getOffer({ params })
Parameters

Parameter | Type | Required   | Description
--------- | -----| :--------: | -----------
offer_id | int |  + | ID of trade offer

Response

Parameter | Type | Description
--------- | -----| -------- 
offer     | object    | [Standard Trade Offer Object](#standard-trade-offer-object)

### getOffers({ params })
Parameters

Parameter | Type | Required   | Description
--------- | -----| :--------: | -----------
uid | int |  - | ID of other user, involved in offers
state | string |  - | A comma-separated list of offer states to filter by (See available states [here](#offer-states)). 
type | string |  - | One of `sent`, `received`
page | int | - | page number in response (starting with 1, default to 1) 
per_page | int | - | number of items per_page in response (no more then 100, defaults to 100)
ids | int-csv | - | Trade offer IDs list filter
    
Response

Parameter | Type | Description
--------- | -----| -------- 
offers | array | Array of [Standard Trade Offer Object](#standard-trade-offer-object)
total | int | Total number of offers matching the input filters

### getTradeURL()
Response

Parameter | Type | Description
--------- | -----| -------- 
uid       | int    | Your OPSkins User ID
token     | string | Your trade token
long_url  | string | The actual URL someone should go to in order to send a trade offer to your account.
short_url | string | A shortened alias for `long_url` of the type ".../t/1/Lhn9d7fVL1U". This redirects to the long URL. 

### getUserInventory({ params })
Parameters

Parameter | Type | Required   | Description
--------- | -----| :--------: | -----------
uid | int | - | User ID of user whose inventory you want to see 
app_id | int | - | Internal App ID (see Trade/getApps)
page | int | - | page number in response (starting with 1, default to 1) 
per_page | int | - | number of items per_page in response (no more then 100)
search | string | - | additional search by item's name 
    
Response

Parameter | Type | Description
--------- | -----| -------- 
total     | int    | Total number of items (filtered, if search parameter is passed)
items | object | [Standard Item Object](#standard-item-object)
user_data | object | [Standard Public Profile Object](#standard-public-profile-object)

### getUserInventoryFromSteamId({ params })
Parameters

Parameter | Type | Required   | Description
--------- | -----| :--------: | -----------
steam_id | int |  + | Steam ID of user whose inventory you want to see 
app_id | int | + | Internal App ID (see Trade/getApps)
page | int |  | page number in response (starting with 1, default to 1) 
per_page | int |  | number of items per_page in response (no more then 100)
search | string |  | additional search by item's name 
    
Response

Parameter | Type | Description
--------- | -----| -------- 
total     | int    | Total number of items (filtered, if search parameter is passed)
items | object | 
user_data | object | [Standard Public Profile Object](#standard-public-profile-object)

### regenerateTradeURL()
Response

Parameter | Type | Description
--------- | -----| -------- 
uid       | int    | Your OPSkins User ID
token     | string | Your new trade token
long_url  | string | The actual URL someone should go to in order to send a trade offer to your account.
short_url | string | A shortened alias for `long_url` of the type ".../t/1/Lhn9d7fVL1U". This redirects to the long URL.

### sendOffer({ params })
Parameters

Parameter | Type | Required   | Description
--------- | -----| :--------: | -----------
twofactor_code | string | + | 2-factor authentication code
uid | int | + | User ID of user you want to send your trade offer to
token | string | + | Trade token of user you want to send your trade offer to
items | string | + | A comma-separated list of item ids you wish to include in trade offer. There should be both yours and recipients items. 100 maximum per each side.

Response

Parameter | Type | Description
--------- | -----| -------- 
offer     | object    | [Standard Trade Offer Object](#standard-trade-offer-object)

### sendOfferToSteamId({ params })
Parameters

Parameter | Type | Required   | Description
--------- | -----| :--------: | -----------
twofactor_code | int | + | 2FA Auth Code
steam_id | int | + | Steam ID of user you want to send your trade offer to
items | string | + | A comma-separated list of item ids you wish to include in trade offer. There should be both yours and recipients items. 100 maximum per each side.

Response

Parameter | Type | Description
--------- | -----| -------- 
offer     | object    | [Standard Trade Offer Object](#standard-trade-offer-object)
# User Methods [^](#contents)
# Item Methods [^](#contents)
# Standard Item Object
# Standard Trade Offer Object
# Standard Public Profile Object
# Offer States
#
For further documentation please click [here](https://github.com/OPSkins/trade-opskins-api).
