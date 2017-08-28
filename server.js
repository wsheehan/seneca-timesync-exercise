var express = require('express');
var timesyncServer = require('timesync/server');

var app = express();

// handle timesync requests
app.use('/timesync', timesyncServer.requestHandler);

app.listen(3000);
