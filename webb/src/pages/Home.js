import React from 'react';
import HeroSlider from '../components/HeroSlider';
import './Home.css';

function Home() {
  const services = [
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
      image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0571?w=600&q=80',
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

      {/* Services Section Title */}
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

      {/* Services Grid */}
      <section className="services-grid">
        <div className="container">
          <div className="services-cards">
            {services.map((service) => (
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

      {/* CTA Section */}
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

      {/* Brands Section */}
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

      {/* Blue Wave Section with Service Cards */}
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

      {/* Why Choose Us Section */}
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

export default Home;
