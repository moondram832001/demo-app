var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

  app.use(express.static(__dirname + '/dist'));
  
  var routes = require('./apis')(app);

  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

