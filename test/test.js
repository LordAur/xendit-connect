const xendit = require('../index');

const secretKey = '';

describe('Xendit', () => {
  it('Get balance from your xendit account', (done) => {
    xendit.getBalance(secretKey)
      .then((results) => {
        console.log(results);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it('Check name validator', (done) => {
    const json = {
      bank_account_number: '1234567890',
      bank_code: 'BNI',
    };
    xendit.nameValidator(secretKey, json)
      .then((results) => {
        console.log(results);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it('Get list bank virtual account', (done) => {
    xendit.getListBankVA(secretKey)
      .then((results) => {
        console.log(results);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it('Create virtual account', (done) => {
    const json = {
      external_id: 'VA_fixed-{{$timestamp}}',
      bank_code: 'BNI',
      name: 'Yudha Pratama',
    };
    xendit.createVirtualAccount(secretKey, json)
      .then((results) => {
        console.log(results);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it('Create retail outlet', (done) => {
    const json = {
      external_id: 'FPC-{{$timestamp}}',
      retail_outlet_name: 'ALFAMART',
      name: 'Yudha Pratama',
      expected_amount: 25000,
    };
    xendit.createRetailOutlet(secretKey, json)
      .then((results) => {
        console.log(results);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it('Create invoice', (done) => {
    const json = {
      external_id: 'invoice-{{$timestamp}}',
      amount: 1800000,
      payer_email: 'yudha.webdev@gmail.com',
      description: 'Invoice Demo #123',
    };
    xendit.createInvoice(secretKey, json)
      .then((results) => {
        console.log(results);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it('Create disbursement', (done) => {
    const json = {
      external_id: 'disb-{{$timestamp}}',
      amount: 15000,
      bank_code: 'BCA',
      account_holder_name: 'Joe',
      account_number: 1234567890,
      description: 'Disbursement from xendit-connect',
    };
    xendit.createDisbursement(secretKey, json)
      .then((results) => {
        console.log(results);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });
});
