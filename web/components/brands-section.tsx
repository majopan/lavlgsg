import { Settings } from "lucide-react"

export function BrandsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Settings className="w-8 h-8 text-primary" />
        </div>

        {/* Text */}
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Contáctanos para realizar cualquier servicio técnico especializado en neveras, lavadoras, secadoras y aires acondicionados{" "}
          <span className="font-semibold text-primary">LG</span> y{" "}
          <span className="font-semibold text-primary">Samsung</span>.
        </p>

        {/* Brand Logos */}
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
              <span className="text-white font-bold">LG</span>
            </div>
            <span className="text-2xl font-bold text-gray-700">LG</span>
          </div>
          <span className="text-2xl font-bold text-gray-800 tracking-tight">SAMSUNG</span>
        </div>
      </div>
    </section>
  )
}
