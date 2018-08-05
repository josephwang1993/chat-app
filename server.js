const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/login', (req, res) => {
  let username = req.body.username;
  res.status(200).send('Success');
});

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('login', function(userInfo) {
    socket.id = userInfo.uid;
    console.log(socket.id);
  });

  socket.on('disconnect', function() {
    console.log('user disconnected');
  })
});


server.listen(port, () => console.log(`Listening on port ${port}`));