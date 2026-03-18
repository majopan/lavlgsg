import { Metadata } from "next"
import { ServicePageContent } from "@/components/service-page-content"

export const metadata: Metadata = {
  title: "Reparación de Neveras LG y Samsung | Servicentro",
  description: "Servicio técnico especializado en reparación y mantenimiento de neveras LG y Samsung en Bogotá.",
}

export default function NeverasPage() {
  return (
    <ServicePageContent
      title="Reparación de Neveras"
      description="Expertos en reparación y mantenimiento de neveras LG y Samsung. Solucionamos problemas de enfriamiento, fugas, ruidos extraños, sistema de hielo y más."
      image="https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&h=500&fit=crop"
      services={[
        "Reparación de sistema de enfriamiento",
        "Cambio de termostato",
        "Reparación de fugas de gas",
        "Mantenimiento del compresor",
        "Reparación del sistema de hielo",
        "Cambio de empaques",
        "Limpieza de condensador",
        "Diagnóstico técnico completo",
      ]}
    />
  )
}
