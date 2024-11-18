


//free to extend the BaseError
class APIError {
 constructor(name, httpCode , isOperational = true, description = 'internal server error') {
   if(isOperational)
     console.log("--------") // Need to log the details in to the system come here
   this.name=name
   this.statuscode=httpCode
   
   //Write to the log file and send to global Error handling

   const err=new Error(name)
   err.statusCode=httpCode
   return(err)
}

}


module.exports=APIError