const crypto = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.text({ inflate: true, limit: '100kb', type: 'text/plain' }));

// hold hashed values and the messages.
const database = {};

app.get('/', (req, res) => {
  res.send('You can send the string to /messages endpoint as content: type text/plain ')
})

app.get('/messages/:hashValue', (req, res) => {
  // check if there is a hashed value in db
    if(database[req.params.hashValue]) {
        res.send(database[req.params.hashValue])
    }
    else{
        res.sendStatus(404);
    }
})

app.post('/messages', (req, res) => {
    const hash = crypto.createHash('sha256').update(req.body).digest('base64url');
    // write hashed values and the message to db.
    database[hash] = req.body;
    res.send(hash);
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});