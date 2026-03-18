import { Metadata } from "next"
import { ServicePageContent } from "@/components/service-page-content"

export const metadata: Metadata = {
  title: "Reparación de Secadoras LG y Samsung | Servicentro",
  description: "Servicio técnico especializado en reparación y mantenimiento de secadoras LG y Samsung en Bogotá.",
}

export default function SecadorasPage() {
  return (
    <ServicePageContent
      title="Reparación de Secadoras"
      description="Reparación profesional de secadoras LG y Samsung. Solucionamos problemas de calentamiento, ruidos, sistema de ventilación y componentes eléctricos."
      image="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&h=500&fit=crop"
      services={[
        "Reparación del sistema de calentamiento",
        "Limpieza de conductos de ventilación",
        "Cambio de resistencias",
        "Reparación de termostatos",
        "Mantenimiento del tambor",
        "Reparación de sensores de humedad",
        "Cambio de correas",
        "Diagnóstico electrónico completo",
      ]}
    />
  )
}
