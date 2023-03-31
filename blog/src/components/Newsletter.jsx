import React from 'react';

export default function Newsletter() {
  return (
    <section>
      <div className="newsletter-info">
        <h1>Newsletter</h1>
        <p>assine e fique por dentro das novidades</p>
      </div>
      <form className="newsletter-form">
        <input type="text" placeholder="Seu e-mail" />
        <button type="submit">Assinar</button>
      </form>
    </section>
  );
}
