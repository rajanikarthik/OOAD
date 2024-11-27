// Expected Book Payload Structure
// {
//   "title": "Book Title",
//   "author": "Author Name",
//   "genre": "Genre",
//   "publicationYear": 2020
// }
const Book=require('../Model/Book')

const APIError=require('../../Middleware/CustomErrorHandler')
const ErrorCodes=require('../../Middleware/ErrorCodes')
const arr=require('../Resource/Book')


module.exports.AddBooks=function(req,res,next){
	let request=req.body
	
	try{
		if(!request.title || ! request.author || !request.genre || !request.publicationYear){ 
			const err=new APIError(
					   ErrorCodes.BAD_REQUEST.message,
					   ErrorCodes.BAD_REQUEST.code,
					   'AddBooks Module missing params',
					   true);
			
			throw err
		}

		let bk=new Book(request.title,request.author,request.genre,request.publication)
		arr.push(bk)
			
		res.status(ErrorCodes.SUCCESS.code).json((bk))

	}catch(err){ 
		next(err)
	}
	finally{

	}
}

module.exports.GetBooks=function(req,res,next)
{
	try { 
			let id=req.params.id
			let title=request.query.title
			if(!id){
				const err=new APIError(
							   ErrorCodes.BAD_REQUEST.message,
							   ErrorCodes.BAD_REQUEST.code,
							   'GetBooks Module missing params',
							   true);
					
					throw err
			}

			let filarr=arr.filter(val=>val.id==id)
			
			if(filarr)
				res.status(ErrorCodes.SUCCESS.code).json(filarr)
			else
				res.status(ErrorCodes.NOT_FOUND.code).json({message: ErrorCodes.NOT_FOUND.message})
			
		} catch(err){
			next(err)
		}

}

module.exports.GetAllBooks=function(req,res,next)
{
	try { 

			res.status(ErrorCodes.SUCCESS.code).json((arr))
		} catch(err){
			next(err)
		}

}

module.exports.PutBooks=function(req,res,next)
{
	try {
			let id=req.params.id
			let title=req.query.title
			let author=req.query.author
			if(!id || !title || !author){
					const err=new APIError(
								   ErrorCodes.BAD_REQUEST.message,
								   ErrorCodes.BAD_REQUEST.code,
								   'PutBooks Module missing params',
								   true);
						
						throw err
				}
			
			let arrin=arr.findIndex(val=>val.id==id)
			arr[arrin].author=author
			arr[arrin].title=title

			res.end(arr)
	}catch(err){
		next(err)
	}
}
module.exports.DeleteBooks=function(req,res,next){
	try {
			let id=req.params.id
			if(!id){
				const err=new APIError(
							   ErrorCodes.BAD_REQUEST.message,
							   ErrorCodes.BAD_REQUEST.code,
							   'PutBooks Module missing params',
							   true);
					
					throw err
				}
			
			let arrin=arr.findIndex(val=>val.id==id)
			
			if(arrin>-1){ 
				let remarr=arr.splice(arrin,1) 
				res.status(ErrorCodes.SUCCESS.code).json(remarr) // 204 if deleted and no content returned
			}
			else
				res.status(ErrorCodes.NOT_FOUND.code).json({message: ErrorCodes.NOT_FOUND.message})
	}catch(err){
		next(err)
	}

}