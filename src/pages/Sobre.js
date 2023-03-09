import React from "react";
import { Link } from "react-router-dom";

function Sobre()  {
    return (<div className='Sobre'>
      <h1>Sobre o Projeto</h1>
      <p className="description">Uma Drum Machine é um tipo de sintetizador especializado em criar sons de baterias.
         Na minha interpretação de um sintetizador desse tipo utilizo de um calculo de distribuição de Beats no tempo baseado em
         <a href='https://en.wikipedia.org/wiki/Euclidean_rhythm'> teorias matematicas de Euclides.</a></p>
      <p className="description"> Projeto realizador em React, utilizando <a href="https://reactronica.com/">Reactronica</a> para gerar os sons.</p>
      <p>
        <Link className="links" to='/'>Voltar</Link> 
        <a className="links" href="https://www.linkedin.com/in/rafael-s-borges/">Contato</a>
      </p>
    </div>
    );
  };

export default Sobre;