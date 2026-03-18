import Link from "next/link"

const services = [
  {
    title: "Neveras",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop",
    href: "/servicios/neveras",
  },
  {
    title: "Lavadoras",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=300&fit=crop",
    href: "/servicios/lavadoras",
  },
  {
    title: "Secadoras",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=300&fit=crop",
    href: "/servicios/secadoras",
  },
  {
    title: "Aires acondicionados",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop",
    href: "/servicios/aires-acondicionados",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary italic mb-2">
            Servicentro: Servicio técnico especializado
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Nuestros servicios
          </h3>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            Conservamos en excelente estado tus electrodomésticos y así evitas su deterioro con{" "}
            <span className="font-semibold text-foreground">personal técnico altamente capacitado</span>, ya que
            solucionamos cualquier daño técnico y a la vez realizamos inspecciones técnicas preventivas para verificar el óptimo funcionamiento de tus:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-primary py-3 px-4 text-center">
                <span className="text-white font-semibold">{service.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
