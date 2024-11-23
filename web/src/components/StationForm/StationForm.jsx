import React, { useState } from "react";
import { createChargingStation } from "../../api/api";
import './StationForm.css'; 

const StationForm = ({ onStationCreated }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newStation = await createChargingStation({ name, location });
      onStationCreated(newStation);
      setName('');
      setLocation('');
    } catch (error) {
      console.error("Erro ao criar estação de recarga:", error);
    }
  };

  return (
    <div className="station-form">
      <h2>Criar Nova Estação de Recarga</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da Estação"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Localização"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit" className="btn-submit">Criar Estação</button>
      </form>
    </div>
  );
};

export default StationForm;
