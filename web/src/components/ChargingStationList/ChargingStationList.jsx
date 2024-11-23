import React, { useEffect, useState } from "react";
import { getChargingStations } from "../../api/api";
import "./ChargingStationList.css"; 

const ChargingStationList = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const data = await getChargingStations();
        setStations(data);
      } catch (error) {
        console.error("Erro ao obter estações de recarga:", error);
      }
    };

    fetchStations();
  }, []);

  return (
    <div className="charging-station-list">
      <h2>Estações de Recarga</h2>
      {stations.length === 0 ? (
        <p>Não há estações disponíveis.</p>
      ) : (
        <div className="station-cards-container">
          {stations.map(station => (
            <div key={station.id} className="station-card">
              <h3>{station.name}</h3>
              <p>Localização: {station.location}</p>
              <p>Status: {station.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ChargingStationList;
