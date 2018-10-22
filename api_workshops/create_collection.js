// This is just used to create the collection initially

var MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/'

MongoClient.connect(url, function (err, db) {
  if (err) throw err
  let dbo = db.db('tododb')
  dbo.createCollection('todoLists', function (err, res) {
    if (err) throw err
    console.log('Collection created!')
    db.close()
  })
})
