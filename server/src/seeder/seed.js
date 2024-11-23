const sequelize = require('../config/database');
const User = require('../models/User');
const RecommendationSource = require('../models/RecommendationSource');
const OptimalChargingTime = require('../models/OptimalChargingTime');
const Charge = require('../models/Charge'); // Importa o modelo Charge
const bcrypt = require('bcrypt'); // Para hash da senha
const jwt = require('jsonwebtoken'); // Para gerar o token JWT
require('dotenv').config(); // Para carregar variáveis de ambiente

async function seedDatabase() {
  // Resetar o banco de dados
  await sequelize.sync({ force: true });

  // Inserir fontes de energia recomendadas primeiro
  const recommendationSources = await RecommendationSource.bulkCreate([
    { location: 'sao_paulo', sources: ['Solar', 'Eólica'] },
    { location: 'rio_de_janeiro', sources: ['Hidráulica', 'Solar'] },
    { location: 'belo_horizonte', sources: ['Eólica', 'Solar'] },
  ]);

  // Inserir horários ótimos para recarga
  const optimalTimes = await OptimalChargingTime.bulkCreate([
    { time: '00:00 - 06:00', reason: 'Menor demanda' },
    { time: '22:00 - 23:59', reason: 'Tarifa reduzida' },
  ]);

  // Inserir um usuário com preferências, garantindo que preferredEnergySource exista
  const user = await User.create({
    name: 'João',
    email: 'joao@example.com',
    password: await bcrypt.hash('senha123', 10), // Hash da senha
    preferredEnergySource: recommendationSources[0].location, // Usando a localização da primeira fonte
    preferredChargingTimes: JSON.stringify(['00:00 - 06:00']) // Armazenando como JSON
  });

  // Gerar um token JWT para o usuário criado usando a chave secreta do ambiente
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  console.log("Token gerado para o usuário:", token);

  // Inserir dados de Charge, referenciando o usuário criado
  const chargesData = [
    {
      status: "Ativo",
      energySource: "Solar",
      userId: user.id, // Usando o ID do usuário criado
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      status: "Em andamento",
      energySource: "Hidráulica",
      userId: user.id,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      status: "Ativa",
      energySource: "Hidráulica",
      userId: user.id,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      status: "Em andamento",
      energySource: "Eólica",
      userId: user.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  // Inserir as recargas no banco de dados
  await Charge.bulkCreate(chargesData);

  console.log("Dados inseridos com sucesso!");
}

// Executa a função seedDatabase e trata erros
seedDatabase().catch(error => {
  console.error("Erro ao inserir dados:", error);
}).finally(() => {
  sequelize.close();
});