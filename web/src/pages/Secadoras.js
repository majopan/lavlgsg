import React from 'react';
import ServicePage from '../components/ServicePage';

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

function Secadoras() {
  return <ServicePage data={secadorasData} />;
}

export default Secadoras;
