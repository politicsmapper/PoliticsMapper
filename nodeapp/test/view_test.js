var fs = require('fs');
var view = require("../routes/view");
var assert = require("assert");
describe('View', function(){
  describe('positionOfIdInIndex()', function(){
    it('should return 0 when for the first id', function(){
      
      fs.exists("index.txt", function(exists) {
        if (exists) {
            fs.stat("index.txt", function(error, stats) {
                fs.open("index.txt", "r", function(error, fd) {
                    view.positionOfIdInIndex("uk.org.publicwhip/debate/1935-11-26a.1.0", fd, 0, stats.size, function (position) {
                        assert.equal(postion, 0);
                        fs.close(fd);
                    });
                });
            });
        }
      });

    })
  })
})