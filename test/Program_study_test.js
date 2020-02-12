//const psrouter = express.Router();
//let chaiHttp = require('chai-http');
//const psrouter = require('../psrouter');
/**
 * chai methods
 * fail(actual, expect, msg)
 * equal(a,b)
 * notEqual
 * isAbove  isAtleast
 * isBelow  isAtmost
 * typeOf
 * isOk strictEqual deepEqual
 * isNotOk  strictNotEqual  deepNotEqual
 * isTrue   isNotTrue
 * isFalse  isNotFalse
 * isNull   isNaN   isNotNull   isNotNaN
 * exists   notExists
 * isUndefined  isDefined
 * isFunction   isObject    isArray isString    isNumber
 * isBoolean
 * instanceOf
 * match    notMatch    <--- regular expresions
 * property notProperty
 * propertyVal  notPropertyVal
 * lengthOf
 * hasAnyKeys   hasAllKeys  containsAllKeys <!--- in objects
 * throws   doesNotThrow
 * closeTo  approximately
 * oneOf    <--- look in an array
 * changes  doesNotChange
 * increases    increasesBy  increasesButNotBy
 * decreases    decreasesBy decreasesButNotBy
 */

var chai = require('chai');
var chaiHttp = require('chai-http');
let server = require('../server');
const app = require('../app');
const R = require('../routes/programofstudy');
const getprog = require('../routes/programofstudy').getprog;
let should = chai.should();
const express = require('express');

chai.use(chaiHttp);
describe('checking status of /GET and what it should be returning', () =>{
it('should return 200',(done) => {
    chai.request(app)
    .get('/programofstudy', function(err, res){
        expect(res.status).to.equal(200);
    })
    // .end((err, res) => {
    //     res.should.have.status(200);
    //     res.body.should.be.a('array');
    //    done();
    // });
      
      done();
    
});

it('should be getting students ids', (done) => {
    let student = 'p100214165';
   // student.save((err, student) => {
        chai.request(server)
        .get('/programofstudy/' + student.PID)
        .send(student)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('PID');
            done();

        })
   // })
});


//   it('testing arrays in prog study',function(done) {
//     chai.request(app)
//     .get('http://localhost/programofstudy/:id_student', function(err, res)
//     expect(res.body).instanceof(Array);
//     // .end((err, res) => {
//     //     //res.should.have.status(200);
//     //     res.body.should.be.a('array');
       
//     // });
      
//       done();
    
//   });
});

describe('Testing Post in program of study', () =>{
    it('should return 200',(done) => {
        //var courseupdate = 'INSERT INTO etm.enrolled_in (PID, courseName, grade, semester) VALUES (?, ?, ?, ?) ON duplicate key update grade = ?, semester = ?';
        let courseupdate = {
            PID: "P100214165",
            courseName: "ETM 1100",
            grade: "A",
        }
        chai.request(app)
        .post('/', function(err, res){
            expect(res.status).to.equal(200);
        })
        .send(courseupdate)
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
        
        
    });
});


// describe('/GET student ids in getprog', () => {
//     it('it should get a students id', async function(done) {
//         assert.isString(R.getprog(), 'the query is a string');
//         // psrouter.request(server)
//         // .get('/:student_id')
//         // .end((err, res) => {
//         //     res.should.have.status(200);
//         //     res.should.be.a(String);
//         //     done();
//         // });
//         done();
//     })
// })
//   describe('/GET book', () => {
//     it('it should GET all the books', (done) => {
//       chai.request(server)
//           .get('/book')
//           .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('array');
//                 res.body.length.should.be.eql(0);
//             done();
//           });
//     });
// });

// });
// describe('getting the right ids from prog of study', function(){
//     it('this should return the pid', function(){
//         assert.equal(R(), '')
//     });
// });

// describe('App', function() {
//     it('App should do this', function(done){
//         request(app)
//             .expect(200)
//             .end(function(err, res){
//                 if(err){
//                     return done(err);
//                 }
//                 done
//             });
//     });
// });

// it('should return 400', function (done) {
//     request.get('http://localhost:8000', function (err, res, body){
//       expect(res.statusCode).to.equal(400);
//       expect(res.body).to.equal('wrong header');
//       done();
//     });
//   });
// describe('testing the test', function() {
//     it.skip('Check ids', function(done){
//         chai.request(app)
//             .get('/:student_id')
//             // .expect(200)
//             // .expect('Content-Type', String)
//             .end(function(err, res){

//                 if(err){
//                     return done(err);
//                 }
//                 res.body.should.be.instanceof(Array);
//                 done
//             });
//     });
// });