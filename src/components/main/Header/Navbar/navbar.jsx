import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo"><div className='navbar-logo-first'>[DIGI </div><div className='navbar-logo-second'> bujo</div><div className='navbar-logo-first'>]</div></div>
      <ul className="navbar__links">
        <li className="navbar__item"><a href="/home">Inicio</a></li>
        {/*<li className="navbar__item"><a href="/nosotros">Nosotros</a></li>
        <li className="navbar__item"><a href="/servicios">Servicios</a></li>
        <li className="navbar__item"><a href="/contacto">Contacto</a></li>*/}
      </ul>
      <div className="navbar__toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
