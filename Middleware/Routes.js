var express = require('express');
// var cors = require('cors') // have specify cors in different middleware
var app = express();
const ErrorCodes=require('./ErrorCodes')

const classOperations= require('../Api/Controllers/OperationController')


module.exports = function (app) {
app.get('/api/Child/GetName', (req, res,next) => {
		classOperations.GetName(req, res,next);
	})

app.all('*', (req, res,next) => {
	const error=new Error(ErrorCodes.NOT_FOUND.message)
		error.statusCode=ErrorCodes.NOT_FOUND.code
		next(error)
});


}
