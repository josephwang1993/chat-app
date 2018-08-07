const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/client/build'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html');
});

let onlineUsers = {}

io.on('connection', function(socket) {
  socket.on('login', function(newUser) {
    socket.id = newUser.uid;
    if(socket.id in onlineUsers === false) {
      onlineUsers[newUser.uid] = newUser.username;
    }
    io.emit('loggedin', {
      onlineUsers: onlineUsers,
      newUser: newUser
    });
  });

  socket.on('disconnect', function() {
    if(socket.id in onlineUsers) {
      let leftUser = onlineUsers[socket.id];
      delete onlineUsers[socket.id];
      io.emit('logout', {
        onlineUsers: onlineUsers,
        leftUser: leftUser,
        leftUserId: socket.id
      })
    }
  });

  socket.on('message', function(messageObj) {
    socket.broadcast.emit('message', messageObj);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));