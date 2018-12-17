# xendit-connect
This package is to make easier to connect the xendit payment

# Requirements
*  xendit-connect requires NodeJs 8.X or greater

# Comming soon feature
* Credit card
* Batch disbursement
* NPWP validator

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

Input json data
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

Input json data
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

Input json data
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

### Create retail outlet
One way for your customer to pay through Retail Outlets is by providing them Fixed Payment Code. Fixed payment code is a dedicated payment code under a name you choose, e.g. 'YourCompany - Kodepanda'. You will receive a callback each time this fixed payment code is paid.
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.createRetailOutlet(secret_key, jsonInput)
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

Input json data
```json
{
  "external_id": "FPC-123456",
  "retail_outlet_name": "ALFAMART",
  "name": "Yudha Pratama",
  "expected_amount": 25000
}
```

### Update retail outlet
One way for your customer to pay through Retail Outlets is by providing them Fixed Payment Code. Fixed payment code is a dedicated payment code under a name you choose, e.g. 'YourCompany - Kodepanda'. You will receive a callback each time this fixed payment code is paid.
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.updateRetailOutlet(secret_key, paymentCodeId, jsonInput)
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
| paymentCodeId | Yopur return payment code from create retail outlet |
| jsonInput | Your input |

Input json data
```json
{
  "name": "Yudha Pratama",
  "expected_amount": 80000,
  "expiration_date": "dateblabla"
}
```

### View detail retail outlet data
Sometime, you need to know the detail for your fixed payment code. This endpoint can be used to get the latest details from your fixed payment code
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.viewDetailRetailOutlet(secret_key, paymentCodeId)
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
| paymentCodeId | Yopur return payment code from create retail outlet |

### Create invoice
Invoices allow you to quickly create a form for users to pay with any of our payment methods. When payment is complete, a callback is made regardless of the payment method used
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.createInvoice(secret_key, jsonInput)
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

Input json data
```json
{
  "external_id": "invoice-123456",
  "amount": 1800000,
  "payer_email": "yudha.webdev@gmail.com",
  "description": "Invoice Demo #123",
}
```

### View detail invoice data
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.viewDetailInvoice(secret_key, invoiceId)
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
| invoiceId | Yopur return invoice id from create invoice |

### Make invoice expire
You can cancel an already created invoice by expiring it immediately using this endpoint.
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.makeInvoiceExpire(secret_key, invoiceId)
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
| invoiceId | Yopur return invoice id from create invoice |

### Create disbursement
Disbursements allow you to instruct Xendit to instantly send money to any bank account across Indonesia on your behalf.
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.createDisbursement(secret_key, jsonInput)
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

Input json data
```json
{
  "external_id": "disb-123456",
  "amount": 15000,
  "bank_code": "BCA",
  "account_holder_name": "Joe",
  "account_number": 1234567890,
  "description": "Disbursement from xendit-connect"
}
```

### Get disbursement data by id
This endpoint queries the current status of a disbursement. This is often used for checking the status of a transaction.
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.getDisbursementById(secret_key, disbursementId)
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
| invoiceId | Your return disbursement id from create disbursement |

### Get disbursement data by external_id
This endpoint queries the current status of all disbursements with requested external_id. This is often used to check the status of a transaction with external_id.
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.getDisbursementByExternalId(secret_key, externalId)
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
| invoiceId | external_id from your input create disbursement |

### Get list disbursement bank
This API endpoint will provide you the current list of banks we support for disbursements. We support transfers to 140+ banks in Indonesia, including some BPDs and BPRs, and virtual accounts of major banks (BRI, BNI, Mandiri, CIMB Niaga, Permata, BTN, and NOBU Bank). We also support disbursements to major e-wallets (GoPay, OVO, and Mandiri e-cash). If you would like us to support payment to a specific destination, please contact us at [support@xendit.co](mailto:support@xendit.co).
```javascript
const xenditconnect = require('xendit-connect');
xenditconnect.getListDisbursementBank(secret_key)
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

# Note
For more detail about API Refrence Xendit, you can read at [https://xendit.github.io/apireference](https://xendit.github.io/apireference/)
