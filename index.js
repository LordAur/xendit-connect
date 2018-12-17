const unirest = require('unirest');

exports.getBalance = (secretKey, type = null) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    let url = '';
    if (type === null) {
      url = 'https://api.xendit.co/balance';
    } else {
      url = `https://api.xendit.co/balance?account_type=${type.toUpperCase()}`;
    }

    unirest
      .get(url)
      .headers({ Authorization: `Basic ${base64}` })
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.nameValidator = (secretKey, json) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .post('https://api.xendit.co/bank_account_data_requests')
      .headers({ Authorization: `Basic ${base64}` })
      .send({ bank_account_number: json.bank_account_number, bank_code: json.bank_code })
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.getListBankVA = (secretKey) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .get('https://api.xendit.co/available_virtual_account_banks')
      .headers({ Authorization: `Basic ${base64}` })
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};

exports.createVirtualAccount = (secretKey, json) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(`${secretKey}:`).toString('base64');
    unirest
      .post('https://api.xendit.co/callback_virtual_accounts')
      .headers({ Authorization: `Basic ${base64}` })
      .send({ external_id: json.external_id, bank_code: json.bank_code, name: json.name })
      .timeout(30000)
      .end((response) => {
        if (response.statusCode !== 200) {
          reject(response.body);
        }

        resolve(response.body);
      });
  });
};
