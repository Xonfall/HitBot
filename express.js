const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

/*app.get('/bot/api', function (req, res) {
    console.log(req)
    //console.log(res)
    res.send('Hello World!')
  })*/

  app.post('/api/music', function (req, res) {
    let categorie = req.body.result.action;
    let musicTitle = req.body.result.parameters.any;

    res.send(musicTitle);
  });

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
