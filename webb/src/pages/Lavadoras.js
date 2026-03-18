import React from 'react';
import ServicePage from '../components/ServicePage';

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

function Lavadoras() {
  return <ServicePage data={lavadorasData} />;
}

export default Lavadoras;
