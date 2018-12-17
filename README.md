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

### Name validator
The Name Validator can be used to look up the name of an account holder for any bank account in Indonesia, except virtual account.
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.nameValidator(secret_key, jsonInput)
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
| jsonInput | Your input |

Input parameter
```
{
  bank_account_number: '1234567890',
  bank_code: 'BNI',
}
```

### Get list banks for virtual account
Get list banks virtual account allow you to retrieve all bank that can be used for payment
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.getListBankVA(secret_key, account_type)
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
