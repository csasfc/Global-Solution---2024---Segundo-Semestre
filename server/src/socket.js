const { Server } = require('socket.io');

let io;

function initializeSocket(server) {
  io = new Server(server);
}

function getSocket() {
  if (!io) {
    throw new Error("Socket not initialized");
  }
  return io;
}

module.exports = { initializeSocket, getSocket };