//////////////////////////////////////////////////////
//
// Write an HTTP server that serves JSON data when it 
// receives a GET request to the path '/api/currenttime'. 
//
//////////////////////////////////////////////////////
var http = require('http')


// Function to make an object with year, month, date, hour,
// minute format and return the object
function currenttime() {
    const now = new Date();

    // Formatting the date and time
    const dateTime = {
        year: now.getFullYear(),
        month: String(now.getMonth() + 1).padStart(2, '0'),
        date: String(now.getDate()).padStart(2, '0'),
        hour: String(now.getHours()).padStart(2, '0'),
        minute: String(now.getMinutes()).padStart(2, '0')
    };

    return dateTime;
}

var server = http.createServer(function (req, res) {
  // req.url = /api/currenttime
  var result

  // match req.url with the string /api/currenttime
  if (/^\/api\/currenttime/.test(req.url))
    result = currenttime()

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result) + '\n\n')
  } else {
    res.writeHead(404)
    res.end('Not Found.\n')
  }
})
server.listen(Number(process.argv[2]), () => {
    console.log('Server is running on port 8000');
});