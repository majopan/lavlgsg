import { Metadata } from "next"
import { ServicePageContent } from "@/components/service-page-content"

export const metadata: Metadata = {
  title: "Reparación de Aires Acondicionados LG y Samsung | Servicentro",
  description: "Servicio técnico especializado en reparación y mantenimiento de aires acondicionados LG y Samsung en Bogotá.",
}

export default function AiresPage() {
  return (
    <ServicePageContent
      title="Reparación de Aires Acondicionados"
      description="Instalación, mantenimiento y reparación de aires acondicionados LG y Samsung. Expertos en sistemas split, mini split y unidades centrales."
      image="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=500&fit=crop"
      services={[
        "Instalación de equipos nuevos",
        "Recarga de gas refrigerante",
        "Limpieza de filtros y serpentines",
        "Reparación de compresores",
        "Mantenimiento preventivo",
        "Reparación de fugas",
        "Revisión del sistema eléctrico",
        "Diagnóstico de eficiencia energética",
      ]}
    />
  )
}
