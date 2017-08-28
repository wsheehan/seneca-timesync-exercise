// https://www.npmjs.com/package/seneca
// http://senecajs.org/getting-started/
// const Seneca = require('seneca');
// const ts = require("./time.js").init();

// Seneca()
//   .use("./trade.js", {service: 'service1', ts: ts})
//   .listen({port: '9001', pin: 'service:service1'})
const timesync = require("timesync");

const Seneca = require('seneca');
// const ts = require("./time.js").init();

Seneca()
  .use("./trade.js", {service: 'service1'})
  .add('method:timesync', (msg,reply) => {
    console.log(ts.now())
    reply({sync: "success"});
  })
  .listen({port: '9001', pin: 'service:service1'})

let ts = timesync.create({
  peers: ["http://localhost:9002/act","http://localhost:9003/act"], 
  interval: 10000
});

setInterval(function(){
  console.log("Time: " + new Date(ts.now()));
}, 10000)