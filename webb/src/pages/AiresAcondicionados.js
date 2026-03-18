import React from 'react';
import ServicePage from '../components/ServicePage';

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

function AiresAcondicionados() {
  return <ServicePage data={airesData} />;
}

export default AiresAcondicionados;
