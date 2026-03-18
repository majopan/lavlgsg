import { Wrench, Award, Shield } from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Experiencia",
    description: "Tenemos la capacidad de brindar soluciones técnicas inmediatas.",
  },
  {
    icon: Award,
    title: "Calidad",
    description: "Brindamos lo mejor para ofrecerte un excelente servicio y cumplimiento.",
  },
  {
    icon: Shield,
    title: "Garantía",
    description: "Trabajamos con repuestos originales, precios justos y servicio inmediato.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Por qué elegir a Servicentro?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Gracias a la calidad y compromiso en nuestros trabajos, miles de familias en{" "}
            <span className="font-semibold text-foreground">Bogotá y sus alrededores</span> han confiado en nosotros durante los
            últimos 15 años resaltando nuestra:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primary rounded-xl p-6 text-center text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/90 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
