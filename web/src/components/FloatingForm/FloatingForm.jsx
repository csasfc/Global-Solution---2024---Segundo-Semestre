import React, { useState } from "react";
import { createCharge } from "../../api/api";
import './FloatingForm.css'; 

const FloatingForm = ({ onChargeCreated, onClose }) => {
  const [status, setStatus] = useState('');
  const [energySource, setEnergySource] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCharge = await createCharge({ status, energySource, userId });
      onChargeCreated(newCharge);
      onClose(); 
      setStatus('');
      setEnergySource('');
      setUserId('');
    } catch (error) {
      console.error("Erro ao criar recarga:", error);
    }
  };

  return (
    <div className="floating-form">
      <h2>Criar Nova Recarga</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Fonte de Energia"
          value={energySource}
          onChange={(e) => setEnergySource(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="ID do Usuário"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <button type="submit" className="btn-submit">Criar Recarga</button>
      </form>
      <button className="btn-close" onClick={onClose}>Fechar</button>
    </div>
  );
};

export default FloatingForm;
