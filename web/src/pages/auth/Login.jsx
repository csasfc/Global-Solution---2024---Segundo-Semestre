import React, { useState } from "react";
import "./Form.css";
import { loginUser } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(credentials); 
      localStorage.setItem("token", data.token); 
      navigate("/dashboard"); 
    } catch (err) {
      setError("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>
        {error && <p className="form-error">{error}</p>}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="form-button">
          Entrar
        </button>
      </form>
      <p className="auth-text">
        Não tem uma conta? <Link to="/auth/register">Registrar-se</Link>
      </p>
    </div>
  );
};

export default Login;
