const assert = require('assert');
const Student = require('../models/student')

//describe test
describe('Find records', function(){

  var stu;
beforeEach(function(done){
  stu = new Student({
    name: 'Bharghvi'
  });

  stu.save().then(function(){
    assert(stu.isNew === false); //can be removed
    done();
  })
})

it('find a record', function(done){

  Student.findOne({name: 'Bharghvi'}).then(function(result){
    assert(result.name === 'Bharghvi')
    done();
  })
})

it('find a record by id', function(done){

  Student.findOne({_id: stu._id}).then(function(result){
    assert(result._id.toString() === stu._id.toString())
    done();
  })
})

})
