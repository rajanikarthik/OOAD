var express = require('express');
// var cors = require('cors') // have specify cors in different middleware
var app = express();

const classOperations= require('../Api/Controllers/OperationController')


module.exports = function (app) {
app.get('/api/Child/GetName', (req, res) => {
		classOperations.GetName(req, res);
	})
}