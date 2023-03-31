import React from 'react';
import products from '../data/products/products';

export default function Prices() {
  return (
    <section className="preco" id="preco">
      <div className="preco-item">
        <h2>Cobre</h2>
        <span>
          <sup>R$</sup>
          19
        </span>
        <ul>
          {
            products[0].cobre.map((item, index) => (
              <li key={ index }>
                {item}
              </li>
            ))
          }
        </ul>
      </div>

      <div className="preco-item">
        <h2>Prata</h2>
        <span>
          <sup>R$</sup>
          39
        </span>
        <ul>
          {
            products[1].prata.map((item, index) => (
              <li key={ index }>
                {item}
              </li>
            ))
          }
        </ul>
      </div>

      <div className="preco-item">
        <h2>Ouro</h2>
        <span>
          <sup>R$</sup>
          79
        </span>
        <ul>
          {
            products[2].ouro.map((item, index) => (
              <li key={ index }>
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}
