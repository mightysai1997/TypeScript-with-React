const https = require('https');
const express = require('express');
const fs = require('fs');

const app = express();

const options = {
  key: fs.readFileSync('path/to/private.key'),
  cert: fs.readFileSync('path/to/certificate.crt'),
  // Insecure TLS configuration example
  secureProtocol: 'TLSv1_1_method' // Weak protocol (TLSv1.1), should use TLSv1.2 or TLSv1.3
};

https.createServer(options, app).listen(443);
