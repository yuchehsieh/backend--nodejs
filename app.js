let express = require('express')
let app = express();

// parese application/json
// 取代 body-parser 的 middleware
let jsonParser = express.json(); 

// parse application/x-www-form-urlencoded
// 取代 bodyParser.urlencoded 的 middleware
let urlencodedParser = express.urlencoded({ extended: false }); 

app.get('/', function (req, res) {
    res.send('hello world')
});

// 使用 urlencoded
app.post('/urlencoded', urlencodedParser, function(req, res) {
    console.log(req.body);
    res.send('Sucess!!');
});

// 使用 express.json()
app.post('/', jsonParser, function(req, res) {
    console.log("req.body: " + req.body);
    console.log("req.body.firstName: " + req.body.firstName);
    console.log("req.body.lastName: " + req.body.lastName);
    console.log("req.body['non-exist-value']: " + req.body.email);

    res.send('Suceess!!');
})

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.listen(5000);