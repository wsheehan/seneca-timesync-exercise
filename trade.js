module.exports = function( options ) {
  // Expected pattern 
  // {role: 'trade', order: 'buy', ticker: 'BTC', volume: 10, service: 'service1'}
  this.add('role:trade,order:buy', (msg,reply) => {
    console.log("Trade at: " + options.ts)
    reply({order: 'buy', ticker: msg.ticker, volume: msg.volume, service: msg.service});
  });
}