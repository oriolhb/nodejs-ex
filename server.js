var http = require('http');
var sha = require('sha.js');
var hash1_pass = sha.hex_hmac_sha256('$1$SERCOMM$', 'test123');
var user_password = sha.hex_hmac_sha256("6E9925BE5119D153", hash1_pass);
var server = http.createServer();
function control(petic, resp) {
resp.writeHead(200, {'content-type': 'text/plain'});
resp.write(user_password);
resp.end();
}
server.on('request', control);
server.listen(8080);
