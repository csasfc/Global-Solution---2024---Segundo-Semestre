const express = require('express');
const router = express.Router();
const chargeController = require('../controllers/chargeController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, chargeController.createCharge);
router.get('/', authMiddleware, chargeController.getCharges);
router.put('/:id/status', authMiddleware, chargeController.updateChargeStatus);

module.exports = router;