import React from "react";
import Circles from "../services/Circles";
import { useState } from "react";

function Primeira() {
  const [circles,setCircles] = useState(Circles(11,4));
    return (
      <>
        <h1>Bem-vinde viajante ao meu portifolio</h1>
        <h2>Aqui te serviremos os mais interesantes conteudos</h2>
        <ol>
          <h3>
            Ideias pro portifolio:
          </h3>
          <li>musica(synth)</li>
          <li>jogo usando aleatoriedade(dado?)</li>
          <li>jogo de descriptografar</li>
        </ol>
        <p>{circles}</p>
      </>
    );
  };

export default Primeira;