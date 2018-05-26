var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var MongoClient = require("mongodb").MongoClient;
var app = express();
var db;

var options = {
    useNewUrlParser: true
};

MongoClient.connect("mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge", options, function(err, database) {
    if (err) throw err;

    db = database;

    app.listen(3000);
    console.log("Listening on port 3000");
});

app.get("/", function (req, res) {
    db.collection("Titles").find({}, function (err, docs) {
        docs.each(function (err, doc) {
            if (doc) {
                console.log(doc);
            } else {
                res.end();
            }
        });
    });
});
