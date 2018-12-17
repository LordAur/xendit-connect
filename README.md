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
```json
{
  "bank_account_number": "1234567890",
  "bank_code": "BNI"
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

### Create virtual account
Fixed virtual accounts are dedicated virtual accounts under a name you choose, e.g. 'YourCompany - Kodepanda'. You will receive a callback each time this fixed virtual account is paid. 
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.createVirtualAccount(secret_key, jsonInput)
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

```json
{
  "external_id": "VA-123456",
  "bank_code": "BNI",
  "name": "Yudha Pratama"
}
```

### Update data virtual account
Fixed Virtual Account is so adaptable, and it's all based on your needs. Therefore, we provide you this endpoint to easily update your fixed virtual account as you like.
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.updateVirtualAccount(secret_key, virtualAccountId, jsonInput)
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
| virtual_account_id | Your virtual account id |
| jsonInput | Your input |

```json
{
  "expiration_date": "dateblabla",
  "is_single_use": false,
  "suggested_amount": 80000,
  "expected_amount": 80000,
}
```

### View detail virtual account payment
When you receive our callback in your URL, you can verify that the callback you receive is coming from us.
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.viewDetailVirtualAccountPayment(secret_key, paymentId)
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
| paymentId | Your payment id |

### View detail virtual account data
Sometime, you need to know the detail for your fixed virtual account. This endpoint can be used to get the latest details from your fixed virtual account
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.viewDetailVirtualAccount(secret_key, virtualAccountId)
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
| paymentId | Your virtual account id |
