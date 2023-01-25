import React from "react";
import { Link } from "react-router-dom";

function Primeira() {
    return (
      <>
        <h1>Bem-vinde viajante ao meu portifolio</h1>
        <h2>Aqui te serviremos os mais interesantes conteudos</h2>
        <ol>
          <h3>
            Ideias pro portifolio:
          </h3>
          <Link to="/synth">
          <li>musica(synth)</li>
          </Link>
          <li>jogo usando aleatoriedade(dado?)</li>
          <li>jogo de descriptografar</li>
        </ol>
      </>
    );
  };

export default Primeira;