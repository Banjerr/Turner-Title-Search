const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

let db;

const MONGO_URI = "mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge";

const options = {
    useNewUrlParser: true
};

function initApp(database) {
    db = database;
    app.listen(3000, () => console.log('running on port 3000!'));    
}

app.get('/title', (req, res) => {
    db.collection('Titles').find({}).toArray((err, docs) => {
        if (err) throw err;

        res.json(docs);
    });
});

app.get('/title/:titleName', (req, res) => {
  var titleToSearch = req.params.titleName;

  var query = {
    'TitleName': titleToSearch
  };

  db.collection('Titles').find(query).toArray((err, docs) => {
    if (err) throw err;

    res.json(docs);
  });
});


(() => {
    return MongoClient.connect(MONGO_URI, options).then(client => initApp(client.db()));
})();
