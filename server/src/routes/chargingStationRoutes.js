const express = require('express');
const router = express.Router();
const ChargingStation = require('../models/ChargingStation');

// Criar uma nova estação de recarga
router.post('/', async (req, res) => {
  const { name, location } = req.body;
  
  try {
    const station = await ChargingStation.create({ name, location });
    res.status(201).json(station);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Obter todas as estações de recarga
router.get('/', async (req, res) => {
  try {
    const stations = await ChargingStation.findAll();
    res.json(stations);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Atualizar o status de uma estação de recarga
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const station = await ChargingStation.findByPk(id);
    if (!station) {
      return res.status(404).json({ message: "Estação não encontrada" });
    }

    station.status = status;
    await station.save();
    
    // Emitir evento via Socket.IO
    const io = require('../socket').getSocket();
    io.emit('stationStatusUpdated', station);
    
    res.json(station);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;