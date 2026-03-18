import { Metadata } from "next"
import { ServicePageContent } from "@/components/service-page-content"

export const metadata: Metadata = {
  title: "Reparación de Lavadoras LG y Samsung | Servicentro",
  description: "Servicio técnico especializado en reparación y mantenimiento de lavadoras LG y Samsung en Bogotá.",
}

export default function LavadorasPage() {
  return (
    <ServicePageContent
      title="Reparación de Lavadoras"
      description="Servicio técnico especializado en lavadoras LG y Samsung. Reparamos problemas de centrifugado, drenaje, ruidos, fugas de agua y sistemas electrónicos."
      image="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&h=500&fit=crop"
      services={[
        "Reparación de motor y transmisión",
        "Solución de problemas de centrifugado",
        "Reparación de bombas de drenaje",
        "Cambio de rodamientos",
        "Reparación de tarjetas electrónicas",
        "Solución de fugas de agua",
        "Cambio de mangueras",
        "Mantenimiento preventivo",
      ]}
    />
  )
}
