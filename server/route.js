module.exports = (app) => {

	app.get('/', (req, res)=> {
		res.send('API is running');
	});

}