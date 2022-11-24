const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hi');
});

io.on('connection', (socket) => {
  socket.emit('me', socket.id);

  socket.on('disconnect', () => {
    socket.broadcast.emit('callended');
  });
  socket.on('calluser', ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit('calluser', { signal: signalData, from, name });
  });
  socket.on('answercall', (data) => {
    io.to(data.to).emit('callaccepted', data.signal);
  });
});

server.listen(process.env.PORT || 5001, () => {
  console.log('Server up and running');
});
