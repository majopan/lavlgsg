// App.js - Archivo principal unificado
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// ============ COMPONENTE FLOATING BUTTONS ============
function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a 
        href="tel:+573052924748" 
        className="floating-btn phone-btn"
        aria-label="Llamar"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
      </a>
      <a 
        href="https://wa.me/573052924748?text=Hola,%20necesito%20un%20servicio%20técnico" 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

// ============ COMPONENTE HERO SLIDER ============
const slides = [
  {
    id: 1,
    title: 'Mantenimiento de neveras y lavadoras',
    subtitle: 'Mantén tus electrodomésticos en perfecto funcionamiento con Servicentro.',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1920&q=80'
  },
  {
    id: 2,
    title: 'Reparación de aires acondicionados',
    subtitle: 'Servicio técnico especializado para tu comodidad.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80'
  },
  {
    id: 3,
    title: 'Instalación de electrodomésticos',
    subtitle: 'Confía en expertos certificados LG y Samsung.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80'
  }
];

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay"></div>
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <a 
              href="https://wa.me/573052924748?text=Hola,%20necesito%20un%20servicio%20técnico"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escríbenos
            </a>
          </div>
        </div>
      ))}
      <div className="slide-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

// ============ COMPONENTE HEADER ============
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

// ============ COMPONENTE FOOTER ============
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Servicentro</h3>
          <p className="footer-text">
            Servicio técnico especializado en electrodomésticos LG y Samsung.
            Más de 15 años de experiencia en Bogotá y sus alrededores.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Servicios</h3>
          <ul className="footer-links">
            <li><Link to="/servicios/neveras">Neveras</Link></li>
            <li><Link to="/servicios/lavadoras">Lavadoras</Link></li>
            <li><Link to="/servicios/secadoras">Secadoras</Link></li>
            <li><Link to="/servicios/aires-acondicionados">Aires acondicionados</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contacto</h3>
          <ul className="footer-contact">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span>313 207 1356</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>servicentrobogota15@gmail.com</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Carrera 106 # 71A-33, Bogotá</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Síguenos</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Servicentro. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

// ============ COMPONENTE SERVICE PAGE ============
function ServicePage({ data }) {
  return (
    <div className="service-page">
      <section className="service-hero" style={{ backgroundImage: `url(${data.image})` }}>
        <div className="service-hero-overlay"></div>
        <div className="service-hero-content">
          <h1>{data.title}</h1>
          <p>{data.subtitle}</p>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <h2 className="section-title">Nuestros servicios de {data.title.toLowerCase()}</h2>
          <div className="section-divider"></div>
          <p className="service-description">{data.description}</p>

          <div className="services-list-container">
            <div className="services-image">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="services-list">
              <h3>Servicios que ofrecemos:</h3>
              <ul>
                {data.services.map((service, index) => (
                  <li key={index}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta wave-section">
        <div className="wave-top"></div>
        <div className="wave-content">
          <div className="container">
            <h2>¿Necesitas este servicio?</h2>
            <p>Contáctanos ahora y recibe atención personalizada de nuestros técnicos especializados.</p>
            <div className="cta-buttons">
              <a 
                href={`https://wa.me/573052924748?text=Hola,%20necesito%20servicio%20técnico%20para%20mi%20${data.title.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escríbenos por WhatsApp
              </a>
              <a href="tel:+573052924748" className="btn btn-outline-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Llámanos: 305 292 4748
              </a>
            </div>
          </div>
        </div>
        <div className="wave-bottom"></div>
      </section>

      <section className="service-brands">
        <div className="container">
          <p>Somos especialistas en reparación de electrodomésticos de las marcas:</p>
          <div className="brand-logos-service">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png" alt="LG" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" alt="Samsung" />
          </div>
        </div>
      </section>
    </div>
  );
}

// ============ PÁGINA DE INICIO ============
function Home() {
  const servicesHome = [
    {
      id: 1,
      title: 'Neveras',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=80',
      link: '/servicios/neveras'
    },
    {
      id: 2,
      title: 'Lavadoras',
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80',
      link: '/servicios/lavadoras'
    },
    {
      id: 3,
      title: 'Secadoras',
      image: 'https://www.buyitdirect.ie/Images/BWE71452SUKN_2_Supersize.jpg?w=600&q=80',
      link: '/servicios/secadoras'
    },
    {
      id: 4,
      title: 'Aires acondicionados',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
      link: '/servicios/aires-acondicionados'
    }
  ];

  const features = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: 'Experiencia',
      description: 'Tenemos la capacidad de brindar soluciones técnicas inmediatas.'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Calidad',
      description: 'Brindamos lo mejor para ofrecerte un excelente servicio y cumplimiento.'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0110 0v4"/>
        </svg>
      ),
      title: 'Garantía',
      description: 'Trabajamos con repuestos originales, precios justos y servicio inmediato.'
    }
  ];

  return (
    <div className="home">
      <HeroSlider />

      <section className="services-intro">
        <div className="container">
          <h2 className="section-title">Servicentro: Servicio técnico especializado</h2>
          <h3 className="section-subtitle">Nuestros servicios</h3>
          <div className="section-divider"></div>
          <p className="services-description">
            Conservamos en excelente estado tus electrodomésticos y así evitas su deterioro con{' '}
            <strong>personal técnico altamente capacitado</strong>, ya que solucionamos cualquier daño técnico 
            y a la vez realizamos inspecciones técnicas preventivas para verificar el óptimo funcionamiento de tus:
          </p>
        </div>
      </section>

      <section className="services-grid">
        <div className="container">
          <div className="services-cards">
            {servicesHome.map((service) => (
              <a href={service.link} key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-label">
                  <span>{service.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <p>
            Solicita tu servicio técnico especializado <strong>LG</strong> o <strong>Samsung</strong>{' '}
            escribiéndonos a <a href="https://wa.me/573052924748">WhatsApp</a> o llamándonos al{' '}
            <a href="tel:+573052924748">305 292 4748</a>.
          </p>
          <a 
            href="https://wa.me/573052924748?text=Hola,%20necesito%20un%20servicio%20técnico"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            ¡Hablemos!
          </a>
        </div>
      </section>

      <section className="brands-section">
        <div className="container">
          <div className="brands-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="#0088d1" strokeWidth="2" fill="none"/>
              <path d="M12 20h16M20 12v16" stroke="#0088d1" strokeWidth="2"/>
              <circle cx="20" cy="20" r="6" stroke="#0088d1" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <p>
            Contáctanos para realizar cualquier servicio técnico especializado en neveras, lavadoras, 
            secadoras y aires acondicionados <strong>LG</strong> y <strong>Samsung</strong>.
          </p>
          <div className="brand-logos-large">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png" alt="LG" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" alt="Samsung" />
          </div>
        </div>
      </section>

      <section className="wave-section">
        <div className="wave-top"></div>
        <div className="wave-content">
          <div className="container">
            <div className="promo-cards">
              <div className="promo-card">
                <div className="promo-image">
                  <img src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80" alt="Instalación" />
                </div>
                <div className="promo-info">
                  <h3>Instalación de neveras, lavadoras, secadoras y aires acondicionados.</h3>
                  <a href="https://wa.me/573052924748" className="btn btn-primary">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Solicitar
                  </a>
                </div>
              </div>
              <div className="promo-card">
                <div className="promo-image">
                  <img src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80" alt="Cambio de filtro" />
                </div>
                <div className="promo-info">
                  <h3>Servicio de cambio de filtro para neveras.</h3>
                  <a href="https://wa.me/573052924748" className="btn btn-primary">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Solicitar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-bottom"></div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-subtitle">¿Por qué elegir a Servicentro?</h2>
          <div className="section-divider"></div>
          <p className="why-description">
            Gracias a la calidad y compromiso en nuestros trabajos, miles de familias en{' '}
            <strong>Bogotá y sus alrededores</strong> han confiado en nosotros durante los últimos 
            15 años resaltando nuestro:
          </p>
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ============ PÁGINA DE CONTACTO ============
function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    descripcion: ''
  });
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: '' });
  const [captchaError, setCaptchaError] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptcha({ num1, num2, answer: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(captcha.answer) !== captcha.num1 + captcha.num2) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    
    const message = `Hola, mi nombre es ${formData.nombre}. Mi teléfono es ${formData.telefono}. Mi correo es ${formData.email}. Descripción: ${formData.descripcion}`;
    window.open(`https://wa.me/573052924748?text=${encodeURIComponent(message)}`, '_blank');
    generateCaptcha();
    setFormData({ nombre: '', telefono: '', email: '', descripcion: '' });
  };

  return (
    <div className="contacto-page">
      <section className="contact-cta">
        <div className="container">
          <div className="cta-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <p>
            Solicita tu servicio técnico especializado <strong>LG</strong> o <strong>Samsung</strong>{' '}
            escribiéndonos a <a href="https://wa.me/573052924748">WhatsApp</a> o llamándonos al{' '}
            <a href="tel:+573052924748">305 292 4748</a>.
          </p>
          <a 
            href="https://wa.me/573052924748?text=Hola,%20necesito%20un%20servicio%20técnico"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            ¡Hablemos!
          </a>
        </div>
      </section>

      <section className="coverage-section">
        <div className="container">
          <div className="coverage-content">
            <div className="coverage-text">
              <h2>Nuestra cobertura</h2>
              <div className="section-divider left"></div>
              <p>
                En Servicentro realizamos nuestros servicios en <strong>Bogotá</strong> y en sus{' '}
                <strong>alrededores</strong>.
              </p>
              <p>
                Para mayor información por favor contáctanos directamente al{' '}
                <a href="tel:+573052924748">305 292 4748</a> o escríbenos vía{' '}
                <a href="https://wa.me/573052924748">WhatsApp</a>.
              </p>
              <a 
                href="https://wa.me/573052924748?text=Hola,%20necesito%20un%20servicio%20técnico"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                ¡Escríbenos!
              </a>
            </div>
            <div className="coverage-image">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=80" alt="Mapa de cobertura" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section wave-section">
        <div className="wave-top"></div>
        <div className="wave-content">
          <div className="container">
            <h2>¡Contáctanos!</h2>
            <div className="section-divider white"></div>

            <div className="contact-grid">
              <div className="contact-info-card">
                <h3>Contacta a Servicentro</h3>
                <ul className="contact-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <div>
                      Escríbenos a nuestro <a href="https://wa.me/573052924748">WhatsApp</a> o llámanos 
                      directamente al <a href="tel:+573052924748">305 292 4748</a>.
                    </div>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <div>
                      También puedes escribirnos a{' '}
                      <a href="mailto:servicentrobogota15@gmail.com">servicentrobogota15@gmail.com</a>
                    </div>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <div>
                      Visítanos en la Carrera 106 # 71A-33<br />Bogotá, Colombia.
                    </div>
                  </li>
                </ul>
                <div className="social-section">
                  <p>Sigue a Servicentro en:</p>
                  <div className="social-buttons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn twitter">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-form-card">
                <h3>¿Necesitas más información?</h3>
                <p>Explícanos detalladamente lo que necesitas acerca de tu nevera, lavadora y secadora y pronto nos contactaremos contigo.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Nombres y apellidos"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="Número de celular o WhatsApp"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Correo electrónico"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="descripcion"
                      placeholder="Descripción"
                      rows="4"
                      value={formData.descripcion}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="captcha-group">
                    <span>{captcha.num1} + {captcha.num2} =</span>
                    <input
                      type="number"
                      value={captcha.answer}
                      onChange={(e) => setCaptcha({ ...captcha, answer: e.target.value })}
                      required
                    />
                    <button type="submit" className="btn btn-primary">Enviar</button>
                  </div>
                  {captchaError && <p className="error">Captcha incorrecto. Inténtalo de nuevo.</p>}
                </form>
                <p className="privacy-note">
                  Conoce nuestra <a href="#">política de protección de datos</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-bottom"></div>
      </section>
    </div>
  );
}

// ============ PÁGINAS DE SERVICIOS ============
const neverasData = {
  title: 'Neveras',
  subtitle: 'Servicio técnico especializado en neveras LG y Samsung',
  description: 'Ofrecemos mantenimiento preventivo y correctivo para tu nevera. Nuestros técnicos están capacitados para diagnosticar y reparar cualquier falla en refrigeradores de las marcas LG y Samsung.',
  image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
  services: [
    'Reparación de sistema de enfriamiento',
    'Cambio de termostato',
    'Reparación de motor',
    'Cambio de filtros de agua',
    'Reparación de dispensador de agua/hielo',
    'Mantenimiento preventivo',
    'Reparación de puertas y sellos',
    'Diagnóstico de fallas eléctricas'
  ]
};

const lavadorasData = {
  title: 'Lavadoras',
  subtitle: 'Servicio técnico especializado en lavadoras LG y Samsung',
  description: 'Reparamos y mantenemos tu lavadora en óptimas condiciones. Contamos con técnicos certificados para atender cualquier tipo de falla en lavadoras LG y Samsung.',
  image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80',
  services: [
    'Reparación de tambor',
    'Cambio de rodamientos',
    'Reparación de bomba de agua',
    'Cambio de correas',
    'Reparación de tarjeta electrónica',
    'Mantenimiento preventivo',
    'Reparación de sistema de drenaje',
    'Diagnóstico de errores de código'
  ]
};

const secadorasData = {
  title: 'Secadoras',
  subtitle: 'Servicio técnico especializado en secadoras LG y Samsung',
  description: 'Mantenemos tu secadora funcionando de manera eficiente. Nuestros técnicos están preparados para reparar cualquier problema en secadoras de las marcas LG y Samsung.',
  image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0571?w=800&q=80',
  services: [
    'Reparación de sistema de calentamiento',
    'Cambio de resistencias',
    'Limpieza de ductos de ventilación',
    'Reparación de motor',
    'Cambio de correas y poleas',
    'Mantenimiento preventivo',
    'Reparación de sensores de humedad',
    'Diagnóstico de fallas eléctricas'
  ]
};

const airesData = {
  title: 'Aires Acondicionados',
  subtitle: 'Servicio técnico especializado en aires acondicionados LG y Samsung',
  description: 'Instalamos, reparamos y damos mantenimiento a tu aire acondicionado. Contamos con técnicos certificados para atender equipos LG y Samsung de todo tipo.',
  image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
  services: [
    'Instalación de equipos nuevos',
    'Recarga de gas refrigerante',
    'Limpieza de filtros y serpentines',
    'Reparación de compresor',
    'Mantenimiento preventivo',
    'Reparación de fugas',
    'Cambio de capacitores',
    'Diagnóstico y reparación de tarjetas'
  ]
};

function Neveras() { return <ServicePage data={neverasData} />; }
function Lavadoras() { return <ServicePage data={lavadorasData} />; }
function Secadoras() { return <ServicePage data={secadorasData} />; }
function AiresAcondicionados() { return <ServicePage data={airesData} />; }

// ============ COMPONENTE PRINCIPAL APP ============
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios/neveras" element={<Neveras />} />
            <Route path="/servicios/lavadoras" element={<Lavadoras />} />
            <Route path="/servicios/secadoras" element={<Secadoras />} />
            <Route path="/servicios/aires-acondicionados" element={<AiresAcondicionados />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;