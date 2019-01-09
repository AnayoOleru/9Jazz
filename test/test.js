const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const http = require('chai-http');
chai.use(http);
const app = require('../index');


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


//   test for users to signup
describe('Post \'/api/v1\'', () => {
    it('POST create a new user', (done) => { // WHEN EVERY FIELD IS INPUTED
      chai.request(app)
        .post('/api/v1/users')
        .send({
          password: 'helllo',
          email: '',
          fullname: 'mohammed',
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.headers;
          expect(res).to.have.status(400);
          expect(res).to.not.redirect;
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
  describe('Post \'/api/v1\'', () => {
    it('POST create a new user', (done) => { // WHEN EVERY FIELD IS INPUTED
      chai.request(app)
        .post('/api/v1/users')
        .send({
          password: 'helllo',
          email: 'biolaaa@gmail.com',
          fullname: 'mohammed',
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.headers;
          expect(res).to.have.status(400);
          expect(res).to.not.redirect;
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
  describe('Post \'/api/v1\'', () => {
    it('POST create a new user', (done) => { // WHEN EVERY FIELD IS INPUTED
      chai.request(app)
        .post('/api/v1/users')
        .send({
          password: 'helllo',
          email: 'biolaaa@gmail.com',
          fullname: 'mohammed',
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.headers;
          expect(res).to.have.status(400);
          expect(res).to.not.redirect;
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
  describe('Post \'/api/v1\'', () => {
    it('POST create a new user', (done) => { // WHEN EVERY FIELD IS INPUTED
      chai.request(app)
        .post('/api/v1/users')
        .send({
          password: 'helllo',
          email: 'biolaaa@gmail.com',
          fullname: '',
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.headers;
          expect(res).to.have.status(400);
          expect(res).to.not.redirect;
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });

//   test for users should login
// describe('post /login', () => {
//     it('should return 401 if any credentiasl are invalid', (done) => {
//       chai.request(app)
//         .post('/api/v1/users/login')
//             .send({
//                 email: 'mrb@gmail.com',
//                 password: 'helllo'
//           })
//         .end((err, res) => {
//           expect(err).to.be.null;
//           expect(res).to.have.headers;
//           expect(res.body).to.have.property('message').eql('The credentials you provided Are incorrect');
//           expect(res).to.have.status(401);
//           expect(res).to.not.redirect;
//           expect(res.body).to.be.an('object');
//           done();
//         });
//     });
//   });
//   describe('post /login', () => {
//     it('should return 401 if any credentiasl are invalid', (done) => {
//       chai.request(app)
//         .post('/api/v1/users/login')
//             .send({
//     password: 'hel',
//     email: 'mrb@gmail.com',
//           })
//         .end((err, res) => {
//           expect(err).to.be.null;
//           expect(res).to.have.headers;
//           expect(res.body).to.have.property('error').eql('Password Must Be at least Five Characters');
//           expect(res).to.have.status(401);
//           expect(res).to.not.redirect;
//           expect(res.body).to.be.an('object');
//           done();
//         });
//     });
//   });
//   describe('post /login', () => {
//     it('should return 401 if any credentiasl are invalid', (done) => {
//       chai.request(app)
//         .post('/api/v1/users/login')
//             .send({
//     password: 'helpopoo',
//     email: 'mrb@gmail.com',
//           })
//         .end((err, res) => {
//           expect(err).to.be.null;
//           expect(res).to.have.headers;
//           expect(res.body).to.have.property('message').eql('The credentials you provided Are incorrect');
//           expect(res).to.have.status(401);
//           expect(res).to.not.redirect;
//           expect(res.body).to.be.an('object');
//           done();
//         });
//     });
//   });
//   describe('post /login', () => {
//     it('should return 401 if any credentiasl are invalid', (done) => {
//       chai.request(app)
//         .post('/api/v1/users/login')
//             .send({
//     email: 'mrb@gmail.com',
//     password: 'customer24',
//           })
//         .end((err, res) => {
//           expect(err).to.be.null;
//           expect(res).to.have.headers;
//           expect(res).to.have.status(200);
//           expect(res).to.not.redirect;
//           expect(res.body).to.be.an(token);
//           done();
//     }).catch(err => {
//         console.log(err.message);
//       })
//     });
//   });