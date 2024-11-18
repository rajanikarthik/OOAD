const IntChild=require('../Interfaces/InterfaceClass')
const APIError=require('../../Middleware/CustomErrorHandler')
const ErrorCodes=require('../../Middleware/ErrorCodes')

/*
All class related operations goes here


*/


module.exports.GetName = async function (req, res,next) {
	const query=req.query
	try{ 
		const name=query.name
		if(!name){ 
			const err=new APIError(
					   ErrorCodes.BAD_REQUEST.message,
					   ErrorCodes.BAD_REQUEST.code,
					   '[GetName]Module name and description here',
					   true);
			
			throw err
		}

		const _IntChild=new IntChild()
		console.log("\n"+_IntChild.callChildGetName());
		res.send(_IntChild.callChildGetName())
	} catch(err){
		next(err)
	}
}
