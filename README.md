# An API wrapper for trade.OPSkins.com
# Usage

```js
const OPSkinsTrade = require('trade-opskins-wrapper');

const tradeBot = new OPSkinsTrade('your-api-key', 'your-2fa-secret');

tradeBot.pollTrades();

tradeBot.on('incoming trade', (offer) => {
  console.log(offer);
});
```

# Contents
- [Item Methods](#item-methods-)
- [Trade Methods](#trade-methods-)
- [User Methods](#user-methods-)
- [Standard Item Object](#standard-item-object)
- [Standard Trade Offer Object](#standard-trade-offer-object)
- [Standard User Profile Object](#standard-user-profile-object)
- [Standard Public Profile Object](#standard-public-profile-object)
- [Offer states](#offer-states)
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
### getInventory({ params })
Parameters

Parameter | Type | Required   | Description
--------- | -----| :--------: | -----------
app_id | int | - | Internal App ID (see Trade/getApps)
page | int | - | page number in response (starting with 1, default to 1) 
per_page | int | - | number of items per_page in response (no more then 100)
search | string | - | additional search by item's name 
sort | int | - | Code to set how results should be sorted. See available types below
    
Response

Parameter | Type | Description
--------- | -----| -------- 
total     | int    | Total number of items (filtered, if search parameter is passed)
items | array-object | items list, based on pagination and search filters. [Standard Item Object](#standard-item-object)
sort_parameters | array-object | Available sort parameters
--value | int | value, expected in this method
--display_name | string | Display name

#### Sort parameter values
- `1`: By name ASC
- `2`: By name DESC
- `3`: By last_update ASC
- `4`: By last_update DESC
- `5`: By suggested price ASC
- `6`: By suggested price DESC

### getProfile({ params })
Parameters

Parameter | Type | Required   | Description
--------- | -----| :--------: | -----------
with_extra | bool | - | Should we send sensitive user data? Defaults to `false`
    
Response

Parameter | Type | Description
--------- | -----| -------- 
user     | object | [Standard User Profile Object](#standard-user-profile-object)

### updateProfile({ params })
Parameters

Parameter | Type | Required   | Description
--------- | -----| :--------: | -----------
display_name | string  | - | Name to display on trade offers
inventory_is_private | boolean | - | Whether inventory is private (nobody can see it, even with token)
allow_twofactor_code_reuse | boolean | - | Allow Two Factor code reuse for certain features (Send Offer, Accept Offer)
    
Response

Parameter | Type | Description
--------- | -----| -------- 
user     | object | [Standard User Profile Object](#standard-user-profile-object)
# Standard Item Object
Parameter | Type | Description
--------- | -----| -------- 
id | int | Item ID
internal_app_id | int | Trade/Internal App ID (see Trade/getApps)
sku | int | Item definition (meta-data) SKU #
wear | float | Wear float value, only applicable for certain apps
trade_hold_expires | int / null | Trade hold expiration date. `null` if no trade hold
name | string | Market name
category | string | Category name e.g. "Restricted Rifle"
color | string | Color hex #
image | object | Generic image URLs
--300px | string | 300px image URL
--600px | string | 600px image URL
suggested_price | int | OPSkins 7-day suggested price (US cents)
preview_urls | object | Instant Field Inspection™ URLs.
inspect | string / null | Steam inspection URL. Can be `null`.
eth_inspect | string / null | Etherscan.io Ethereum Transaction URL. `null` for inapplicable apps.
pattern_index | int | Pattern index (value between 1-1000) (only available for App ID `1`, `null` for other apps)
wear_tier | string | Wear tier title (only outputted for App ID `1`)
paint_index | int | Paint index value for a CS:GO item (property __not outputted__ for App ID `1`). Is `0` for items without a paint-index.
# Standard Trade Offer Object
Parameter | Type | Description
--------- | -----| -------- 
offer    | object | Holds offer and item data
--id    | int | offer id
--sender| object | Offer sender's information
----uid  | int | Sender's uid
----steam_id | string | Senders's SteamID
----display_name | string | Sender's display name
----avatar | string | Sender's avatar image url
----items| object | Items which sender offered for trade in the offer. [Standard Item Object](#standard-item-object)
--recipient| object | Offer recipient's information
----uid  | int | Recipient's uid
----steam_id | string | Recipient's SteamID
----display_name | string | Recipient's display name
----avatar | string | Recipient's avatar image url
----items| object | Recipient's items which sender wanted to receive in the offer. [Standard Item Object](#standard-item-object)
--state | int | Offer state code (See available state constants in [ITrade](#offer-states))
--state_name | string | State's display name
--time_created | int | Offer creation timestamp
--time_updated | int | Last update timestamp
--time_expires | int | Offer expiration timestamp
--message | string | Message from sender to receiver
--sent_by_you | bool | Whether or not offer was sent by you, not outputted on non-authenticated endpoints.
# Standard User Profile Object
Parameter | Type | Description
--------- | -----| -------- 
user     | object | Holds user info
--id | int | OPSkins.com User ID
--steam_id | string | Steam ID64
--display_name | string | Display name
--avatar | string | URL to avatar
--twofactor_enabled | boolean | Whether or not user has Two-Factor Auth enabled.
--api_key_exists | boolean | See whether user has API Key
--sms_phone | string/null | (Optional via `with_extra`) Phone number used for SMS verification
--contact_email | string/null | (Optional via `with_extra`) Email address
--inventory_is_private | boolean | (Optional via `with_extra`) Set whether inventory is private (nobody can see it, even with token)
--allow_twofactor_code_reuse | boolean | Allow Two Factor code reuse for certain features (Send Offer, Accept Offer)
# Standard Public Profile Object
Parameter | Type | Description
--------- | -----| -------- 
user_data | object | Holds user info
--username | string | Display name
--avatar | string | URL to avatar
# Offer States
- STATE_ACTIVE = 2;                             /** The offer is active and the recipient can accept it to exchange the items */
- STATE_ACCEPTED = 3;                           /** The recipient accepted the offer and items were exchanged */
- STATE_EXPIRED = 5;                            /** The offer expired from inactivity */
- STATE_CANCELED = 6;                           /** The sender canceled the offer */
- STATE_DECLINED = 7;                           /** The recipient declined the offer */
- STATE_INVALID_ITEMS = 8;                      /** One of the items in the offer is no longer available/eligible so the offer was canceled automatically */
#
For further documentation please click [here](https://github.com/OPSkins/trade-opskins-api).
