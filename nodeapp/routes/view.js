exports.list = function(req, res){
    var id = req.param("source"); 
    
    function (body) {
      res.render('view', {
                'source' : source
            });
    };

};