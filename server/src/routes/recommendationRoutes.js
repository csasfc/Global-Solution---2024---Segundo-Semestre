const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para obter recomendações baseadas na localização do usuário
router.get('/', authMiddleware, recommendationController.getRecommendations);

// Rota para obter horários ótimos para recarga
router.get('/optimal-times', authMiddleware, recommendationController.getOptimalChargingTimes);

module.exports = router;