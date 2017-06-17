const mongoose = require('mongoose');
mongoose.Promise = global.Promise

//connection first hen check for test
before(function(done){
  mongoose.connect('mongodb://localhost/testdb');
  mongoose.connection.once('open', function(){
    console.log("Connection made...");
    done();
  }).on('error', function(error){
    console.log(error);
  });
})

//before every single test so that test runs independently (dropping collection)
beforeEach(function (done) {
  //drop collection
  mongoose.connection.collections.students.drop(function () {
    done();
  })
})

//before and beforeEach are the hooks
