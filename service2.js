// https://www.npmjs.com/package/seneca
// http://senecajs.org/getting-started/
const Seneca = require('seneca');
// const ts = require("./time.js").init();

const timesync = require("timesync");

Seneca()
  .use("./trade.js", {service: 'service2'})
  .add('method:timesync', (msg,reply) => {
    console.log(ts.now())
    reply({sync: "success"});
  })
  .listen({port: '9002', pin: 'service:service2'})

let ts = timesync.create({
  peers: ["http://localhost:9001/act","http://localhost:9003/act"], 
  interval: 10000
});

setInterval(function(){
  console.log("Time: " + new Date(ts.now()));
}, 10000);