const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
require('dotenv').config();

const sequelize = require('./config/database');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const chargeRoutes = require('./routes/chargeRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const chargingStationRoutes = require('./routes/chargingStationRoutes'); // Nova rota

const { initializeSocket } = require('./socket');

const app = express();
const server = http.createServer(app);

// Inicializar o Socket.IO com o servidor HTTP
initializeSocket(server);

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/charges', chargeRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/stations', chargingStationRoutes);

// Inicializar servidor com Socket.IO e sincronizar o banco de dados
sequelize.sync().then(() => console.log("Database synced"));

const io = require('./socket').getSocket();

io.on('connection', (socket) => {
  console.log('Um usuário conectado');

  socket.on('disconnect', () => {
    console.log('Um usuário desconectou');
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});