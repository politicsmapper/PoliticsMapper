var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client();

exports.search = function(req, res){
    var query = req.param("q"); 

    client.search({
      q: query
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