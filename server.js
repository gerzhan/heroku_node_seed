var http = require('http');
var app = http.createServer(_requestListener);

var config = {
  port: process.env.PORT || 3000
};

app.listen(config.port, function() {
  console.log('Run server on port = ' + config.port);
})

function _requestListener(req, res) {
  res.writeHead({
    "content-type": "text/plain"
  });
  res.end('start')
}
