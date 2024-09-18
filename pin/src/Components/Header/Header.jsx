import React from 'react';
import "./Header.css"; // Certifique-se de que o caminho está correto

const Header = () => {
  return (
    <header>
      <div className="logo"></div>
      <nav className="menu">
        <button id="btnPsicologos" className="vizualizar"> Nossos Psicológos </button>
        <button id="btnProfissionais" className="vizualizar"> Colaboradores </button>
        <button id="btnSobre" className="vizualizar"> Sobre nós </button>
      </nav>

      <div className="acessos">
        <button id="btnLogin" className="acesso"> Login </button>
        <button id="btnCadastro" className="acesso"> Cadastra-se </button>
      </div>
    </header>
  );
}

export default Header;
