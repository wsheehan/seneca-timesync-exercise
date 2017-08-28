// https://www.npmjs.com/package/seneca
// http://senecajs.org/getting-started/
// const Seneca = require('seneca');
// const ts = require("./time.js").init();

// Seneca()
//   .use("./trade.js", {service: 'service1', ts: ts})
//   .listen({port: '9001', pin: 'service:service1'})

var Seneca = require('seneca')
var express = require('express')
var timesyncServer = require('timesync/server');

var config = {
  adapter: require('seneca-web-adapter-express'),
  context: express()
}

var seneca = Seneca()
  .use('seneca-web', config)
  .ready(() => {
    var server = seneca.export('web/context')()
    server.use('/timesync', timesyncServer.requestHandler)
    server.listen('4000', () => {
      console.log('server started on: 4000')
    })
  })