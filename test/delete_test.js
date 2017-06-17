const assert = require('assert');
const Student = require('../models/student');

describe('Delete a record', function(){

  var stu
  beforeEach(function(done){
    stu = new Student({
      name: 'Bharghvi'
    })

    stu.save().then(function(){
      assert(stu.isNew === false)
      done();
    });
  });

  it('delete a record', function(done){

    Student.findOneAndRemove({name: 'Bharghvi'}).then(function(){
      Student.findOne({name: 'Bharghvi'}).then(function(result){
        assert(result === null)
        done();
      })
    })
  })
})
