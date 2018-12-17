# xendit-connect
This package is to make easier to connect the xendit payment

# Requirements
*  xendit-connect requires NodeJs 8.X or greater

# Installation
```
npm i xendit-connect
```

# Usage
### Get balance with type
Get Balance allows you to retrieve the balance of your cash, escrow and tax account. Some use cases include: deciding when you may need to withdraw funds, determining if you have funds to disburse, and if you just like to check it’s still there :p
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.getBalance(secret_key, account_type)
  .then((success) => {
    res.json(success);
  })
  .catch((err) => {
    res.json(err);
  });
```
| Parameter | Description  |
|--|--|
| secret_key | Your xendit secret key  |
| account_type | Use `CASH`, `HOLDING` or `TAX`. You can use empty value, and default value is `CASH`|
