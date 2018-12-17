const xendit = require('../index');

describe('Xendit', () => {
  it('Get balance from your xendit account', (done) => {
    xendit.getBalance('xnd_development_NIiCfL8l0OD9ncdoerQaEjeXZdKmqNl4kyXnRxnWzTbGjDg9zhw', 'HOLDING')
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
      bank_code: 'BCA',
    };
    xendit.nameValidator('xnd_development_NIiCfL8l0OD9ncdoerQaEjeXZdKmqNl4kyXnRxnWzTbGjDg9zhw', json)
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
