const Express = require('express');
const app = Express();
const Routes=require('./middleware/Routes')

const ErrorHandler=require('./middleware/ErrorHandler')

//Routes comes here

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(ErrorHandler)
require('./middleware/Routes.js')(app);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});



module.exports=app