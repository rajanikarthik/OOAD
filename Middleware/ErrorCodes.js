
const errorCodes = {
	 BAD_REQUEST: {
    code: 400,
    message: "Some parameter is missing in your Request"
  },
   Unauthorized_REQUEST: {
    code: 401,
    message: "UnAuthorized to access"
  },
   RightsForbidden_REQUEST: {
    code: 403,
    message: "Rights Forbidden"
  },
   Timeout_Request: {
    code: 408,
    message: "Request Timeout"
  },
  INVALID_INPUT: {
    code: 1001,
    message: "Invalid input provided."
  },
  DATABASE_ERROR: {
    code: 2001,
    message: "An error occurred while interacting with the database."
  },
  NOT_FOUND: {
    code: 404,
    message: "Resource not found."
  },
  
};
Object.freeze(errorCodes)
module.exports = errorCodes;

