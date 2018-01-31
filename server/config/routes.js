var path = require('path');
var users = require('../controllers/users')
var sessions = require('../controllers/sessions')
var polls = require('../controllers/polls')

module.exports = (app) => {
	app.get('/')
	app.post('/users', users.create);

	app.get('/sessions', sessions.find);
	app.delete('/sessions', sessions.delete);

	app.post('/polls', polls.create);
	app.get('/polls', polls.index);
	app.get('/polls/:id', polls.show);
	app.delete('/polls/:id', polls.delete);
	app.post('/polls/:id', polls.add);

	app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	})
}