var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client();

exports.search = function(req, res){
    var query = req.param("q"); 

    client.search({
      index: "hansard",
      type: "debate",
      body: {
        "query": { 
          "filtered": {
            "query":  { 
              "match" : {
                "content" : query
              } 
            },
            "filter": { 
              "regexp": {  // Filter out paragraphs that are too short
                "content": {
                  "value": ".{20,}"
                }
              }
            }
          }
        }
      }
    }).then(function (body) {
      var hits = body.hits.hits;
      res.render('results', {
                'hits' : hits,
                'query' : query,
                'type' : "Search"
            });
    }, function (error) {
      console.trace(error.message);
    });

};