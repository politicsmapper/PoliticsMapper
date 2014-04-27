var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client();

exports.view = function(req, res){
    var id = req.param("id"); 

    client.getSource({
        index: "hansard",
        type: "debate",
        id: id
    }).then(function (body) {
        res.render('view', {
            'document' : body
        });
    }, function (error) {
        res.send('Document does not exist');
    });
};