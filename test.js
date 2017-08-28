const Seneca = require('seneca');

Seneca()
  .client({port: '9002', pin: 'service:service2'})
  .client({port: '9003', pin: 'service:service3'})

  .act({role: 'trade', order: 'buy', ticker: 'ETH', volume: 10, service: 'service2'}, function (err, result) {
    if (err) return console.error(err);
    console.log(result);
  })

  .act({role: 'trade', order: 'buy', ticker: 'ETH', volume: 10, service: 'service3'}, function (err, result) {
    if (err) return console.error(err);
    console.log(result);
  })
