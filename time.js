const timesync = require('timesync');

module.exports = {
  init: function() {
    let ts = timesync.create({
      server: "http://localhost:4000/timesync",
      interval: 10000
    })
    setInterval(() => {
      console.log('now:', new Date(ts.now()))
    }, 10000)
    return ts;
  }
}