const express = require('express')
, router = express.Router()
, MongoClient = require('mongodb').MongoClient
, ObjectID = require('mongodb').ObjectID
, connection = (closure) => {
    return MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds135534.mlab.com:35534/meanplayground', (err, db) => {
        if(err) return console.log(err);
        closure(db);
    })
}
, sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
}
// Response handling
let response = {
    status: 200,
    data: [],
    message: null
}


router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res)
            })
    })
})

module.exports = router;