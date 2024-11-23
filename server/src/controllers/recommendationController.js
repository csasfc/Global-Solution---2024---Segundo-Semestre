const RecommendationSource = require('../models/RecommendationSource');
const OptimalChargingTime = require('../models/OptimalChargingTime');

exports.getRecommendations = async (req, res) => {
  const { location } = req.query;

  try {
    const recommendation = await RecommendationSource.findOne({ where: { location } });

    if (!recommendation) {
      return res.status(404).json({ message: "Localização não encontrada." });
    }

    res.json({ recommendedSources: recommendation.sources });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

exports.getOptimalChargingTimes = async (req, res) => {
  try {
    const optimalTimes = await OptimalChargingTime.findAll();

    res.json(optimalTimes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};