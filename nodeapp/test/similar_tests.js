var similar = require("../routes/similar");
var assert = require("assert");
var http = require("http");

describe('Similar', function(){
  describe('list()', function(){
    it('should return a similarity result for a index', function(){
      
      var request = {
        param : function(id) {
          return "uk.org.publicwhip/debate/1935-11-26a.1.0";
        }
      };
      var response = {
          viewName: ""
          , data : {}
          , render: function(view, viewData) {
              assert.equal(view, "search");
          }
      };

      similar.list(request, response);
      

    })
  })
})