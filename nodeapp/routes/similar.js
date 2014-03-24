var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client();

exports.list = function(req, res){
    var id = req.param("id"); 

    client.mlt({
      index: 'hansard',
      type: 'debate',
      id: id
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

};