const assert = require('assert');
const Student = require('../models/student');

describe('Update a record', function(){

  var stu
  beforeEach(function(done){
    stu = new Student({
      name: 'Bharghvi',
      cgpa: 8.5
    })

    stu.save().then(function(){
      done();
    });
  });

  it('update a record', function(done){

    Student.findOneAndUpdate({name: 'Bharghvi'}, {name: 'Guddi'}).then(function(){
      Student.findOne({_id: stu._id}).then(function(result){
        assert(result.name === 'Guddi')
        done()
      })
    })
  })

  it('group update', function(done){

    Student.update({}, {$inc: { cgpa: 1}}).then(function(){
      Student.findOne({name: 'Bharghvi'}).then(function(result){
        assert(result.cgpa === 9.5)
        done();
      })
    })
  })
})
