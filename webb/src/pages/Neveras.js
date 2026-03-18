import React from 'react';
import ServicePage from '../components/ServicePage';

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

function Neveras() {
  return <ServicePage data={neverasData} />;
}

export default Neveras;
