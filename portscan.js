var portscanner = require('portscanner')
 
// Checks the status of a single port
portscanner.checkPortStatus(3000, '127.0.0.1', function(error, status) {
  // Status is 'open' if currently in use or 'closed' if available
  console.log(status)
})
 
// Find the first available port. Asynchronously checks, so first port
// determined as available is returned.
portscanner.findAPortNotInUse(3000, 3010, '127.0.0.1', function(error, port) {
  console.log('AVAILABLE PORT AT: ' + port)
})
 
// You can also pass array of ports to check
portscanner.findAPortInUse([3000, 3005, 3006], '127.0.0.1', function(error, port) {
  console.log('PORT IN USE AT: ' + port)
})
