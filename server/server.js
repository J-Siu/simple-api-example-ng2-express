//process.env['DEBUG'] = 'express:*';

const path = require('path');

// Express
const Ex = require('express');
var ex = {};
ex.app = Ex();
ex.bodyParser = require('body-parser');
ex.compression = require('compression');
ex.morgan = require('morgan');
// Express Constant
ex._const = {};
ex._const.port = 4000;
ex._const.public = path.join(__dirname, '../public');
ex._const.node_modules = path.join(__dirname, '../node_modules');

ex.app
	.use(ex.morgan(':method :status :url :response-time ms')) // Log
	// .use(ex.morgan('combined')) // Log
	.use(ex.compression())
	.use(ex.bodyParser.json())
	.use('/node_modules', Ex.static(ex._const.node_modules))	// node_modules
	.use(Ex.static(ex._const.public))	// html content
	// Start server
	.listen(ex._const.port, function () {
		console.log('---');
		console.log('Port: ' + ex._const.port);
		console.log('Html: ' + ex._const.public);
		console.log('---');
	});

// SimpleApi

// - Import SimpleApi
const SimpleApi = require('simple-api-node').SimpleApi;

// - Setup SimpleApi instance 'apiDemo'
// 		base url = 'apiDataUrl'
// 		debug = true (default false)
const apiDemoUrl = '/demo';
var apiDemo = new SimpleApi(apiDemoUrl, true);
// - Register Demo object with apiDemo
apiDemo.registerObject(require('./api-object').DemoObj);
// - Setup express post to handle /demo/*
var url = path.join(apiDemoUrl, '*');
ex.app.post(url, (req, res) => {
	// Log request body before process
	console.log(req.body);

	try {
		// Manual handler used, server code responsible to send result and handle error
		// Use manual handler if custom header or custom 404 error are needed
		let result = apiDemo.handler(req);
		// Result must be return in json format
		res.json(result);
	}
	catch (e) {
		// Catch api not found error
		res.status(e.status).end(e.error);
	}
});

// - setup SimpleApi instance: apiData
const apiDataUrl = '/data';
var apiData = new SimpleApi(apiDataUrl, true);
apiData.registerObject(require('./api-object').DataObj);
apiData.debug(false); // - disable apiInfo debug after object registration
// Only debug /data/obj
ex.app.post(path.join(apiDataUrl, 'obj'), (req, res) => {
	apiData.debug(true);
	apiData.response(req, res);	// response handler used, response handler will send result or 404 error
	apiData.debug(false);
});
// /data/* must be set AFTER /data/obj, order is important!!
ex.app.post(path.join(apiDataUrl, '*'), (req, res) => apiData.response(req, res));

// - setup SimpleApi instance: apiInfo
const apiInfoUrl = '/info';
var apiInfo = new SimpleApi(apiInfoUrl, true); // debug false (default)
apiInfo.registerObject(require('./api-object').InfoObj);
console.log('apiInfo.list():' + apiInfo.list()); // list registed api
ex.app.post(path.join(apiInfoUrl, '*'), (req, res) => apiInfo.response(req, res));
