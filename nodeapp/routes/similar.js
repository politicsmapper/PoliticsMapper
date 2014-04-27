var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client();

exports.list = function(req, res){
    var id = req.param("id"); 

    client.getSource({
      index: "hansard",
      type: "debate",
      id: id
    }, function (error, response) {
      client.search({
        index: 'hansard',
        type: 'debate',
        body: {
          "query": { 
            "filtered": {
              "query":  { 
                "more_like_this_field" : {
                  "content" : {
                    "like_text" : response["content"]
                  }
                } 
              },
              "filter": { 
                "and": [
                  {
                    "regexp": {  // Filter out paragraphs that are too short
                      "content": {
                        "value": ".{20,}"
                      }
                    }
                  },
                  {
                    "not": {  // Filter out the id we're trying to find similar items for
                      "ids": {
                        "type": "debate",
                        "values":  [id]
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      }).then(function (body) {
        var hits = body.hits.hits;
        res.render('results', {
                  'hits' : hits,
                  'query' : id,
                  'type' : "Similarity"
              });
      }, function (error) {
        res.send('Document does not exist');
      });
    });
};