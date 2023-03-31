import React from 'react';
import sobre1 from '../img/sobre1.jpg';
import sobre2 from '../img/sobre2.jpg';

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-info">
        <h1>Sobre</h1>
        <p>
          O que temos que ter sempre em mente é que a
          determinação clara de objetivos
          afeta positivamente a correta previsão das
          condições inegavelmente apropriadas objetivos.
        </p>
      </div>
      <div className="sobre-img">
        <img src={ sobre1 } alt="sobre 1" />
      </div>
      <div className="sobre-img">
        <img src={ sobre2 } alt="sobre 2" />
      </div>
    </section>
  );
}
