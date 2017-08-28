// https://www.npmjs.com/package/seneca
// http://senecajs.org/getting-started/
const Seneca = require('seneca');
// const ts = require("./time.js").init();
const timesync = require("timesync");

Seneca()
  .use("./trade.js", {service: 'service3'})
  .use("./sync.js", {})
  .listen({port: '9003', pin: 'service:service3'})

let ts = timesync.create({
  peers: ["http://localhost:9002/act","http://localhost:9001/act"], 
  interval: 10000
})

setInterval(function(){
  console.log("Time: " + new Date(ts.now()));
}, 10000)