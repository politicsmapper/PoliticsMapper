var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client();
var fs = require('fs');

var ids = "index.txt";

// Size of id in bytes
var idSize = 50;

var contextSize = 5;

exports.view = function(req, res){
    var id = req.param("id"); 

    contextOfId(id, function (ids) {
        client.mget({
          index: 'hansard',
          type: 'debate',
          body: {
            ids: ids
          }
        }).then(function (documents) {
            // Mark document with id as current
            var current = null;
            for (var i = documents.docs.length - 1; i >= 0; i--) {
                if (documents.docs[i]._id == id) {
                    current = documents.docs[i];
                    break;
                } 
            };
            
            res.render('view', {
                'documents' : documents.docs,
                'current' : current
            });
        }, function (error) {
            res.send('Document does not exist');
        });
    });
};

/**
Given an id, return a list of prior ids, the id itself, and subsequent ids
*/
function contextOfId(id, callback) {
    fs.exists(ids, function(exists) {
        if (exists) {
            fs.stat(ids, function(error, stats) {
                fs.open(ids, "r", function(error, fd) {
                    positionOfIdInIndex(id, fd, 0, stats.size, function (position) {
                        getIdsInRange(position-idSize*5, position+idSize*6-1, fd, function (ids) {
                            callback(ids);
                        });
                        fs.close(fd);
                    });
                });
            });
        }
    });
}

/**
@param id: id of a document
@param indexFd: file descriptor of an index file
@param imin: search start index
@param imax: search end index
*/
function positionOfIdInIndex(id, indexFd, imin, imax, callback) {

    if (imax < imin) {
        callback(null);
    }

    var midPoint = imin + Math.floor((imax-imin)/2) + Math.floor((imax-imin)/2)%idSize;
    var buffer = new Buffer(50);

    fs.read(indexFd, buffer, 0, buffer.length, midPoint, function(error, bytesRead, buffer) {

        var data = buffer.toString("utf8", 0, buffer.length);
        if (aGTb(data, id)) {
            positionOfIdInIndex(id, indexFd, imin, midPoint-idSize, callback);
        }
        else if(aGTb(id, data)) {
            positionOfIdInIndex(id, indexFd, midPoint+idSize, imax, callback);
        }
        else {
            callback(midPoint);
        }
    });
}

// Ids
function getIdsInRange(start, stop, fd, callback) {

    var buffer = new Buffer(stop-start);
    fs.read(fd, buffer, 0, buffer.length, start, function (error, bytesRead, buffer) {

        var data = buffer.toString("utf8", 0, buffer.length);
        var paddedIds = data.split("\n");
        var ids = paddedIds.map(function (currentValue, index, array) {
            return currentValue.split(" ")[0];
        });
        callback(ids);
    });
}

// index a greater than index b
function aGTb (idA, idB) {
    var aComps = idComponents(idA);
    var bComps = idComponents(idB);

    for (var i = 0; i < aComps.length; i++) {
        if (aComps[i] > bComps[i]) { return true; };
        if (aComps[i] < bComps[i]) { return false; };
    }

    // They're equal
    return false;
}

/** 
Turn uk.org.publicwhip/debate/1935-11-26a.12.1
into [1935, 11, 26, a, 12, 1] 
(used to compare ids or get date from id)
*/
function idComponents(id) {
    var comps = id.split('/');
    comps = comps[comps.length-1].split('.');
    var idcomps = comps.slice(1);
    
    var datecomps = comps[0].split("-");
    var dayLetter = datecomps[datecomps.length-1];
    var day = dayLetter.slice(0, dayLetter.length-1);
    var letter = dayLetter[dayLetter.length-1];
    datecomps = datecomps.slice(0, datecomps.length-1).concat([day, letter]);
    
    comps = datecomps.concat(idcomps);

    comps = comps.map(function (currentValue, index, array) {
        return parseInt(currentValue, 10);
    });

    return comps;
}