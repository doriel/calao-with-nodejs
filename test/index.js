// Change the env variable to test environment
process.env.NODE_ENV = 'test';

// Dependencies
const chai = require('chai')
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../server/app');

chai.use(chaiHttp);

/*
*	Test the /GET route
*/
describe('/GET ', () => {
	it('It should GET all the users', (done) => {
		chai.request(server)
			.get('/')
			.end((err, res) => {
				should.exist(res.body);
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body.length.should.be.eql(0);
				done();
			});
	});
});