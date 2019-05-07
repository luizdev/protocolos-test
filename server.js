
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var router = express.Router();
app = express();
app.use(serveStatic(`${__dirname}/dist`));
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/index.html'));
  //__dirname : It will resolve to your project folder.
});

var port = process.env.PORT || 3007;
app.listen(port);

console.log('server started '+ port);