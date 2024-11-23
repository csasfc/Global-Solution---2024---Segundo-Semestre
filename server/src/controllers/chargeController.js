const Charge = require('../models/Charge');
const User = require('../models/User');
const { getSocket } = require('../socket');

exports.createCharge = async (req, res) => {
  console.log("Dados recebidos:", req.body);

  const { status, energySource, userId } = req.body;

  try {
    const userExists = await User.findByPk(userId);
    if (!userExists) {
      return res.status(400).json({ error: "Usuário não encontrado." });
    }

    const charge = await Charge.create({ status, energySource, userId });

    const io = getSocket();
    io.emit('newCharge', charge);

    res.status(201).json(charge);
  } catch (error) {
    console.error("Erro ao criar recarga:", error);
    res.status(400).json({ error: error.message || "Erro desconhecido." });
  }
};

exports.getCharges = async (req, res) => {
  try {
    const charges = await Charge.findAll();
    res.json(charges);
  } catch (error) {
    console.error("Erro ao obter recargas:", error);
    res.status(500).json({ error });
  }
};

// Atualizar o status de uma recarga
exports.updateChargeStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const charge = await Charge.findByPk(id);

    if (!charge) {
      return res.status(404).json({ message: "Recarga não encontrada." });
    }

    charge.status = status;
    await charge.save();

    const io = getSocket();
    io.emit('chargeStatusUpdated', charge);

    res.json(charge);
  } catch (error) {
    console.error("Erro ao atualizar recarga:", error);
    res.status(500).json({ error });
  }
};