const express = require('express');


const app = express();
const port = 3001;
app.use(express.static('public'));
app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  // res.setHeader(
  //   'Content-security-policy',
  //   `script-src 'self' https://apis.google.com`
  // )
  next();
});

app.get('/api/helloworld', (req, res) => {
  res.json({data:'Hello World!'})
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
