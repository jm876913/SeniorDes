var chai = require('chai');
var chaiHttp = require('chai-http');
let server = require('../server');
const prog = require('../routes/programplanner');
const app = require('../app');
let should = chai.should();
const express = require('express');

chai.use(chaiHttp);
describe('Testing status /GET of program planner page', () =>{
    it('/Get test should return 200',(done) => {
        chai.request(app)
        .get('/programplanner/student')
        .end((err, res) => {
            res.should.have.status(200);
        
        });
        
        done();
        
    });
});

describe('Testing Post in Program planner', () =>{
    it('should return 200',(done) => {
        //var courseupdate = 'INSERT INTO etm.enrolled_in (PID, courseName, grade, semester) VALUES (?, ?, ?, ?) ON duplicate key update grade = ?, semester = ?';
        
        chai.request(app)
        .post('/')
        .send()
        .end((err, res) => {
            res.should.have.status(200);
            
            done();
        });
        
       // assert.isFunction(upload, 'is upload a function');
    });
});