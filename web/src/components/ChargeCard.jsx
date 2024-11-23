import React from "react";
import { FaSolarPanel, FaWater, FaWind } from "react-icons/fa";

const ChargeCard = ({ charge, onUpdateStatus }) => {
  const getIconByEnergySource = (energySource) => {
    switch (energySource) {
      case "Solar":
        return <FaSolarPanel className="icon" />;
      case "Hidráulica":
        return <FaWater className="icon" />;
      case "Eólica":
        return <FaWind className="icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="card">
      {getIconByEnergySource(charge.energySource)}
      <h3>{charge.status}</h3>
      <p>Fonte de Energia: {charge.energySource}</p>
      <button
        onClick={() => onUpdateStatus(charge.id)}
        className="btn-update-status"
      >
        Atualizar Status
      </button>
    </div>
  );
};

export default ChargeCard;
