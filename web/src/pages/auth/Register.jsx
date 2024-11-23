import React, { useState } from "react";
import "./Form.css";
import { registerUser } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    preferredEnergySource: "",
    preferredChargingTimes: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(userData); 
      navigate("/auth/login"); 
    } catch (err) {
      setError("Erro ao registrar usuário. Tente novamente.");
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2 className="form-title">Registrar</h2>
        {error && <p className="form-error">{error}</p>}
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Fonte de Energia Preferida:</label>
          <select
            name="preferredEnergySource"
            value={userData.preferredEnergySource}
            onChange={handleChange}
          >
            <option value="">Selecione...</option>
            <option value="Solar">Solar</option>
            <option value="Eólica">Eólica</option>
            <option value="Hidráulica">Hidráulica</option>
          </select>
        </div>
        <div className="form-group">
          <label>Horário Preferido de Carregamento:</label>
          <select
            name="preferredChargingTimes"
            value={userData.preferredChargingTimes}
            onChange={handleChange}
          >
            <option value="">Selecione...</option>
            <option value="00:00 - 06:00">00:00 - 06:00 (Menor demanda)</option>
            <option value="22:00 - 23:59">
              22:00 - 23:59 (Tarifa reduzida)
            </option>
          </select>
        </div>
        <button type="submit" className="form-button">
          Registrar
        </button>
      </form>
      <p className="auth-text">
        Já tem conta? <Link to="/auth/login">Ir para Login</Link>
      </p>
    </div>
  );
};

export default Register;
