const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.get('/bot/api', function (req, res) {
    console.log(req)
    //console.log(res)
    res.send('Hello World!')
  })

  app.post('/post', function (req, res) {
    let categorie = req.body.result.action;
    let musicTitle = req.body.result.parameters.any;

    res.send(musicTitle);
  });
  
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })