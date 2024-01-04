var express = require('express');
const path = require('path');
const cors = require('cors')
var app = express();

app.use(express.static(__dirname + '/dist/dt-landing'))

app.get('/ping', cors(), function(req, res) {
  res.json({ site: 'DutyTrail LANDING alive.' });
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/dt-landing/index.html'));
});

app.listen(process.env.PORT || 4200);
