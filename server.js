const http = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const port = process.env.NODE_ENV || 8080

app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
	fs.readFile(path.join('./', 'public', 'index.html'), 'utf-8', (err, html) => {
    	res.end(html)
    })
});

app.listen(port, () => console.log('run'))
