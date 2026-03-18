import React from 'react';
import './ServicePage.css';

function ServicePage({ data }) {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" style={{ backgroundImage: `url(${data.image})` }}>
        <div className="service-hero-overlay"></div>
        <div className="service-hero-content">
          <h1>{data.title}</h1>
          <p>{data.subtitle}</p>
        </div>
      </section>

      {/* Content Section */}
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

      {/* CTA Section */}
      <section className="service-cta wave-section">
        <div className="wave-top"></div>
        <div className="wave-content">
          <div className="container">
            <h2>¿Necesitas este servicio?</h2>
            <p>Contáctanos ahora y recibe atención personalizada de nuestros técnicos especializados.</p>
            <div className="cta-buttons">
              <a 
                href="https://wa.me/573052924748?text=Hola,%20necesito%20servicio%20técnico%20para%20mi%20{data.title.toLowerCase()}"
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

      {/* Brands Section */}
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

export default ServicePage;
