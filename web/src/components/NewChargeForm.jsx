import React, { useState } from "react";
import { createCharge } from "../api/api";

const NewChargeForm = ({ onChargeCreated }) => {
  const [status, setStatus] = useState("");
  const [energySource, setEnergySource] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCharge = await createCharge({ status, energySource, userId });
      onChargeCreated(newCharge);
      setStatus("");
      setEnergySource("");
      setUserId("");
    } catch (error) {
      console.error("Erro ao criar recarga:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-charge-form">
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
      <button type="submit">Criar Recarga</button>
    </form>
  );
};

export default NewChargeForm;
