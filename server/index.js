const { createServer } = require('http')

createServer(function (req, res) {
  setTimeout(() => {
    res.writeHead(200, {
      'Content-type' : 'application/json; charset=utf-8',
      "Access-Control-Allow-Origin": "*"
    });
    res.write(JSON.stringify({
      errno: 0,
      message: '',
      data: true
    }));
    res.end();
  }, 2000)
}).listen(8000, () => {
  console.log('server in listen on 8000')
})