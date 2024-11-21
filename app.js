const express = require('express');
const app = express();
const Routes=require('./middleware/Routes')

const ErrorHandler=require('./middleware/ErrorHandler')

//Routes comes here

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

require('./middleware/Routes.js')(app);

app.use(ErrorHandler)
module.exports=app