const assert = require('assert');
const Student = require('../models/student')

//describe test
describe('Save records', function(){

//individual tests
it('save a record', function(done){
  var stu = new Student({
    name: 'Bharghvi'
  });

  stu.save().then(function(){
    assert(stu.isNew === false);
    done();
  })
})

})
