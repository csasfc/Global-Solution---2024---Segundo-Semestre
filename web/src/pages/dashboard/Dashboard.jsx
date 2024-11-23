import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { getCharges, updateChargeStatus } from "../../api/api";
import ChargeCard from "../../components/ChargeCard";
import FloatingForm from "../../components/FloatingForm/FloatingForm";
import StationForm from "../../components/StationForm/StationForm";
import ChargingStationList from "../../components/ChargingStationList/ChargingStationList";

const Dashboard = () => {
  const [charges, setCharges] = useState([]);
  const [showFloatingForm, setShowFloatingForm] = useState(false);

  useEffect(() => {
    const fetchCharges = async () => {
      try {
        const data = await getCharges();
        setCharges(data);
      } catch (error) {
        console.error("Erro ao carregar status de recarga:", error);
      }
    };

    fetchCharges();
  }, []);

  const handleUpdateStatus = async (chargeId) => {
    const newStatus = prompt(
      "Digite o novo status para a recarga:",
      "Em andamento"
    );
    if (newStatus) {
      try {
        await updateChargeStatus(chargeId, { status: newStatus });
        const updatedCharges = charges.map((charge) =>
          charge.id === chargeId ? { ...charge, status: newStatus } : charge
        );
        setCharges(updatedCharges);
      } catch (error) {
        console.error("Erro ao atualizar status da recarga:", error);
      }
    }
  };

  const handleChargeCreated = (newCharge) => {
    setCharges([...charges, newCharge]);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Painel de Recarga</h1>

      <div className="section">
        <h2>Criar Nova Recarga</h2>
        <button
          onClick={() => setShowFloatingForm(true)}
          className="btn-open-form"
        >
          Abrir Formulário
        </button>
        {showFloatingForm && (
          <FloatingForm
            onChargeCreated={handleChargeCreated}
            onClose={() => setShowFloatingForm(false)}
          />
        )}
      </div>

      <div className="section">
        <h2>Status de Recargas</h2>
        <div className="cards-container">
          {charges.map((charge) => (
            <ChargeCard
              key={charge.id}
              charge={charge}
              onUpdateStatus={handleUpdateStatus}
            />
          ))}
        </div>
      </div>

      <div className="section">
        <StationForm
          onStationCreated={(newStation) => console.log(newStation)}
        />
      </div>

      <ChargingStationList />
    </div>
  );
};

export default Dashboard;
