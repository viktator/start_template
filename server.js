const http = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.set('port', (process.env.PORT || 8000));
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
	fs.readFile(path.join('./', 'public', 'index.html'), 'utf-8', (err, html) => {
    	res.end(html)
    })
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});