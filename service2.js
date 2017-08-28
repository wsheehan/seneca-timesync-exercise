// https://www.npmjs.com/package/seneca
// http://senecajs.org/getting-started/
const Seneca = require('seneca');
const ts = require("./time.js").init();

Seneca()
  .use("./trade.js", {service: 'service2', ts: ts})
  .listen({port: '9002', pin: 'service:service2'})