import "./HeaderInside.css";
import React from 'react';

const HeaderInside = () => {

    return (
        <>
       <header>
            <div className="bio-Image">
                 <img className="profile-image"/>
            </div>

            <nav className="menu">
                <button id="btnHome" className="vizualizar"> Home </button>
                <button id="btnProfissionais" className="vizualizar"> Profissionais </button>
                <button id="btnSobre" className="vizualizar"> Sobre nós </button>
            </nav>

            <div className="acessos">
                <input type="text" placeholder="Buscar Profissional "/>
                <button id="btnBuscar" className="acesso"> Buscar </button>
                
            </div>
    </header>
      <div className="logo"></div>
      </>



    )
}

export default HeaderInside;

