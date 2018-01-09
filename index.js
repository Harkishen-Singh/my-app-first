var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();
var port = 1111;

app.use(express.static('punlic'));

app.get('/', function (req,res){
  res.sendFile(__dirname + '/' + 'asking.html');

});
var got ={};
app.get('/submission', function (req, res) {
    got = {
    string : req.query.string
  };
  if(got.string != null)
  palin();
  console.log(got.string +  ' is the entered string by the user ');


});
console.log(got.string + ' global response is enabled ');

var server = app.listen(port);

console.log('Server running at port number : '+ server.address().port);
console.log('address : '+ server.address().address);
console.log('host :' + server.address().host);

function palin(){
  var temp;
  var n = got.string;
  var len = n.length;
  for(var i =0; i < len; i++){
    var ch = n.charAt(i);
    var last = n.charAt(n-i-1);
    if(ch == last)
    console.log('Entered string is palindrome');
    else {
      console.log('entered string is not palindrome');

    }

  }












}
