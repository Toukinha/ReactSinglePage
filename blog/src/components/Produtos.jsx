import React from 'react';
import produtos1 from '../img/produtos1.jpg';
import produtos2 from '../img/produtos2.jpg';
import produtos3 from '../img/produtos3.jpg';

export default function Produtos() {
  return (
    <section className="produtos" id="produtos">
      <h1>Produtos</h1>
      <div className="produtos-container">
        <div className="produtos-item purple">
          <h2>Purple</h2>
          <img src={ produtos1 } alt="produtos1" />
        </div>
        <div className="produtos-item pink">
          <h2>Pink</h2>
          <img src={ produtos2 } alt="produtos1" />
        </div>
        <div className="produtos-item blue">
          <h2>Blue</h2>
          <img src={ produtos3 } alt="produtos1" />
        </div>
      </div>
    </section>
  );
}
