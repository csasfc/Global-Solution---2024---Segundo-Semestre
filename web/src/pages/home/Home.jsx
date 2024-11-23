import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Monitoramento de Recarga de Veículos Elétricos
      </h1>
      <p className="home-description">
        Uma solução voltada para o acompanhamento em tempo real do processo de
        recarga de veículos elétricos. Com essa ferramenta, os usuários podem
        monitorar o status de carregamento, receber notificações sobre o
        progresso e otimizar o consumo de energia. O objetivo é garantir maior
        eficiência no uso da eletricidade, aproveitando horários de menor
        demanda e promovendo a transição para uma mobilidade sustentável.
      </p>
      <img
        src="https://cdn.pixabay.com/photo/2018/01/30/02/06/car-3117778_1280.jpg"
        alt="Carro Elétrico"
        className="home-image"
      />
      <p className="register-button">
        <Link to="/auth/register">Não tem uma conta? Registrar-se</Link>
      </p>
    </div>
  );
};

export default Home;
