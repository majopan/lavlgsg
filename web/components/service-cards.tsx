import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const cards = [
  {
    title: "Instalación de neveras, lavadoras, secadoras y aires acondicionados.",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&h=400&fit=crop",
  },
  {
    title: "Servicio de cambio de filtro para neveras.",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&h=400&fit=crop",
  },
]

export function ServiceCards() {
  return (
    <section className="py-16 bg-gradient-to-b from-primary/10 to-primary/30 relative overflow-hidden">
      {/* Wave Background */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"/>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-xl group"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-semibold text-lg mb-4 text-balance">
                  {card.title}
                </h3>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white rounded-full"
                >
                  <a
                    href="https://wa.me/573133071356"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Solicitar
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
