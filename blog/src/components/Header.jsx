import React from 'react';

export default function Header() {
  return (
    <header className="menu-bg">
      <div className="menu">
        <div className="menu-logo">
          <a href="a">ToukaBlog</a>
        </div>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#preoço">Preoço</a></li>
            <li><a href="#qualidade">Qualidade</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
