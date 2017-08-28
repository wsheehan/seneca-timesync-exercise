module.exports = function( options ) {
  // Expected pattern 
  // {role: 'trade', order: 'buy', ticker: 'BTC', volume: 10, service: 'service1'}
  this.add('method:timesync', (msg,reply) => {
    console.log("Sync...")
    reply({sync: "success"});
  });
}