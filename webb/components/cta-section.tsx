import { MessageCircle, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Settings className="w-8 h-8 text-primary" />
        </div>

        {/* Text */}
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Solicita tu servicio técnico especializado{" "}
          <span className="font-semibold text-foreground">LG</span> o{" "}
          <span className="font-semibold text-foreground">Samsung</span> escribiéndonos a{" "}
          <a href="https://wa.me/573133071356" className="text-primary hover:underline">WhatsApp</a> o llamándonos al{" "}
          <a href="tel:3133071356" className="text-primary hover:underline">313 307 1356</a>.
        </p>

        {/* CTA Button */}
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3"
        >
          <a
            href="https://wa.me/573133071356"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            ¡Hablemos!
          </a>
        </Button>
      </div>
    </section>
  )
}
