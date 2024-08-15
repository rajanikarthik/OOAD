const express = require('express');
const app = express();
const Routes=require('./middleware/Routes')

//Routes comes here

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

require('./middleware/Routes.js')(app);
