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
let should = chai.should();
var chai_expect = chai.expect;
const express = require('express');
const app = require('../app');
//const psrouter = express.Router();
//let chaiHttp = require('chai-http');
//const psrouter = require('../psrouter');

chai.use(chaiHttp);
describe('accessing home page', () =>{
    it('/Get test should return 200',(done) => {
        chai.request(app)
        .get('/houme')
        .end((err, res) => {
            res.should.have.status(200);
        
        });
        
        done();
        
    });
    
    it('/Post test should return 200',(done) => {
        chai.request(app)
        .post('/')
        .end((err, res) => {
            res.should.have.status(200);
            
        });
            
            done();
        
        });
});

