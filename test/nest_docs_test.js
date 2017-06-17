const assert = require('assert');
const Instructor = require('../models/instructor');
const mongoose = require('mongoose')

describe('sub docs', function(){
  beforeEach(function (done) {
    mongoose.connection.collections.instructors.drop(function(){
      done();
    })
  })

  it('nesting', function(done){

    var instructor = new Instructor({
      name: 'abc',
      field: 'comp',
      subjects: [{sname: 's1', credit: 4}]
    })

    instructor.save().then(function () {
      Instructor.findOne({name: 'abc'}).then(function(result){
        result.subjects.push({sname: 's2', credit: 3})
        result.save().then(function(){
          Instructor.findOne({name: 'abc'}).then(function (result) {
            assert(result.subjects.length === 2)
            done();
          })
        })
      })
    })
  })
})
