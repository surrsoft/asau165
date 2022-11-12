const express = require('express')
const path = require('path');
const app = express();
const port = 22132;

app.get('/', (req, res) => {
	// console.log('!!-!!-!!  req.headers {221111225346}\n', req.headers); // del+
	// https://nodejs.org/api/http.html#class-httpincomingmessage

	console.log('!!-!!-!!  req {221111233654}\n', req); // del+
	res.send('Hello World!')
})

app.get('/login', (req, res, next) => {
	const options = { root: path.join(__dirname, 'public') };
	const fileName = 'login.html';
	res.sendFile(fileName, options, function (err) {
		if (err) {
			next(err)
		} else {
			console.log('Sent:', fileName)
		}
	});
});

app.use(express.static('public'));

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
