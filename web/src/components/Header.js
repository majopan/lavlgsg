import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Neveras', path: '/servicios/neveras' },
    { name: 'Lavadoras', path: '/servicios/lavadoras' },
    { name: 'Secadoras', path: '/servicios/secadoras' },
    { name: 'Aires acondicionados', path: '/servicios/aires-acondicionados' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="#0088d1" strokeWidth="2" fill="none"/>
              <path d="M12 20h16M20 12v16" stroke="#0088d1" strokeWidth="2"/>
              <circle cx="20" cy="20" r="6" stroke="#0088d1" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <span className="logo-text">SERVICENTRO</span>
        </Link>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li 
              className="nav-item dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="nav-link dropdown-toggle">
                Servicios
                <svg className={`chevron ${isServicesOpen ? 'rotate' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              {isServicesOpen && (
                <ul className="dropdown-menu">
                  {services.map((service) => (
                    <li key={service.path}>
                      <Link 
                        to={service.path} 
                        className={`dropdown-item ${location.pathname === service.path ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link 
                to="/contacto" 
                className={`nav-link ${location.pathname === '/contacto' ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>

          <div className="brand-logos">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png" alt="LG" className="brand-logo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" alt="Samsung" className="brand-logo" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
