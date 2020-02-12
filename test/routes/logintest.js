const asser = require('chai').expect;
const app = require('../app.js');

describe('Login to the system', function() {
    it.skip('Check Admin Login', function(done){
        request(app)
            .get('/login')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
                if(err){
                    return done(err);
                }
                res.body.should.be.instanceof(Array);
                done
            });
    });
});

// it('Should login successfully by GET /houme', function(done){
//     request(app)
//         .post('/houme')
//         .send("hello")
//         .expect(200)
//         .expect('Content-Type', /json/)
//         .end(function(err, res){
//             res.body.should.have.property('participant');
//         });
//     done();
// )};