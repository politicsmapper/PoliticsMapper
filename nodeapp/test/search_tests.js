var search = require("../routes/search");
var assert = require("assert");
var http = require("http");

describe('Search', function(){
  describe('positionOfIdInIndex()', function(){
    it('should return a search result for a query', function(){
      
      var request = {
        param : function(p) {
          return "Something";
        }
      };
      var response = {
          viewName: ""
          , data : {}
          , render: function(view, viewData) {
              assert.equal(view, "search");
          }
      };

      search.search(request, response);
      

    })
  })
})