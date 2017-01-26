let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/hello', (req, res) => {
	console.log("req", req.body);
});

app.listen(8081, () => console.log('Example app listening on port 8081!') );