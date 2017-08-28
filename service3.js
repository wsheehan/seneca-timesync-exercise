// https://www.npmjs.com/package/seneca
// http://senecajs.org/getting-started/
const Seneca = require('seneca');
const ts = require("./time.js").init();

Seneca()
  .use("./trade.js", {service: 'service3', ts: ts})
  .listen({port: '9003', pin: 'service:service3'})