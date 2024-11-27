var express = require('express');
// var cors = require('cors') // have specify cors in different middleware
var app = express();
const ErrorCodes = require('./ErrorCodes')

const classOperations = require('../Api/Controllers/OperationController')
const CRUD			  = require('../Api/Controllers/BooksController')


module.exports = function (app) {
	app.get('/api/Child/GetName', (req, res, next) => {
		classOperations.GetName(req, res, next);
	})

	app.get('/demo', (req, res) => {
		//  crud.GET(req,res)
		res.status(200).json("done")
	})

	app.post('/AddBooks', (req,res,next) =>{
		CRUD.AddBooks(req,res,next)
	})
	
	app.get('/GetBooks/:id',(req,res,next)=>{
	    CRUD.GET(req,res,next)
	})
	app.get('/GetAllBooks',(req,res,next)=>{
	    CRUD.GetAllBooks(req,res,next)
	})
	
	app.put('/putbooks/:id',(req,res,next)=>{
		CRUD.PutBooks(req,res,next)
	})
	
	app.delete('/deletebooks/:id',(req,res,next)=>{
		 CRUD.DeleteBooks(req,res,next)
	})
	
	app.all('*', (req, res, next) => {
		const error = new Error(ErrorCodes.NOT_FOUND.message)
		error.statusCode = ErrorCodes.NOT_FOUND.code
		next(error)
	});


}
