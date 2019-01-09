const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const http = require('chai-http');
chai.use(http);
const app = require('../index');

// checks if mocha is installed and working fine
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1,2,3].indexOf(4), -1);
//     });
//   });
// });



describe('GET \'/api/v1\'', () => {
  it('It should return  welcome message', (done) => {
    chai.request(app)
      .get('/api/v1')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.headers;
        expect(res).to.have.status(200);
        expect(res).to.not.redirect;
        expect(res.body).to.be.an('object');
        done();
      });
  });
});


describe('App basics', () => {
    it('Should exists', () => {
      expect(app).to.be.a('function');
    })
  })