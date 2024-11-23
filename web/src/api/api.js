import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', 
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data; 
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw error; 
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    const { token } = response.data;
    if (token) {
      localStorage.setItem('authToken', token); // Salva o token no localStorage
    }
    return response.data; 
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error; 
  }
};

export const getCharges = async () => {
  try {
    const response = await api.get('/charges');
    return response.data; 
  } catch (error) {
    console.error("Erro ao obter recargas:", error.response?.data || error.message);
    throw error; 
  }
};

export const createCharge = async (chargeData) => {
  try {
    const response = await api.post('/charges', chargeData);
    return response.data; 
  } catch (error) {
    console.error("Erro ao criar recarga:", error.response?.data || error.message);
    throw error; 
  }
};

export const updateChargeStatus = async (chargeId, statusData) => {
  try {
    const response = await api.put(`/charges/${chargeId}/status`, statusData);
    return response.data; 
  } catch (error) {
    console.error("Erro ao atualizar status da recarga:", error.response?.data || error.message);
    throw error; 
  }
};

export const getRecommendations = async (location) => {
  try {
    const response = await api.get('/recommendations', { params: { location } });
    return response.data; 
  } catch (error) {
    console.error("Erro ao obter recomendações:", error.response?.data || error.message);
    throw error; 
  }
};

export const getOptimalChargingTimes = async () => {
  try {
    const response = await api.get('/recommendations/optimal-times');
    return response.data; 
  } catch (error) {
    console.error("Erro ao obter horários ótimos:", error.response?.data || error.message);
    throw error; 
  }
};

export const createChargingStation = async (stationData) => {
  try {
    const response = await api.post('/stations', stationData);
    return response.data; 
  } catch (error) {
    console.error("Erro ao criar estação de recarga:", error.response?.data || error.message);
    throw error; 
  }
};


export const getChargingStations = async () => {
  try {
    const response = await api.get('/stations');
    return response.data; 
  } catch (error) {
    console.error("Erro ao obter estações de recarga:", error.response?.data || error.message);
    throw error; 
  }
};