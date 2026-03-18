import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contacto | Servicentro",
  description: "Contáctanos para solicitar servicio técnico especializado en neveras, lavadoras, secadoras y aires acondicionados LG y Samsung en Bogotá.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Coverage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Nuestra cobertura
              </h1>
              <div className="w-24 h-1 bg-primary rounded-full mb-6" />
              <p className="text-muted-foreground mb-4">
                En Servicentro realizamos nuestros servicios en{" "}
                <span className="font-semibold text-foreground">Bogotá</span> y en sus alrededores.
              </p>
              <p className="text-muted-foreground mb-6">
                Para mayor información por favor contáctanos directamente al{" "}
                <a href="tel:3133071356" className="text-primary hover:underline">313 307 1356</a> o escríbenos vía{" "}
                <a href="https://wa.me/573133071356" className="text-primary hover:underline">WhatsApp</a>.
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
              >
                <a
                  href="https://wa.me/573133071356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  ¡Escríbenos!
                </a>
              </Button>
            </div>

            {/* Map Illustration */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-primary/10 rounded-full" />
                <div className="absolute inset-4 bg-primary/20 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-primary font-bold">Bogotá</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-primary/80 to-primary relative overflow-hidden">
        {/* Wave at top */}
        <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-white">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            ¡Contáctanos!
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info Card */}
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Contacta a Servicentro
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">
                      Escríbenos a nuestro{" "}
                      <a href="https://wa.me/573133071356" className="text-primary hover:underline">WhatsApp</a>{" "}
                      o llámanos directamente al{" "}
                      <a href="tel:3133071356" className="text-primary hover:underline">313 307 1356</a>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">
                      También puedes escribirnos a{" "}
                      <a href="mailto:servicentrobogota15@gmail.com" className="text-primary hover:underline">
                        servicentrobogota15@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">
                      Visítanos en la Carrera 106 # 71A-33<br />
                      Bogotá, Colombia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Sigue a Servicentro en:
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-primary rounded-md flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-foreground rounded-md flex items-center justify-center hover:bg-foreground/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-4">
                ¿Necesitas más información?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Explícanos detalladamente lo que necesitas acerca de tu nevera, lavadora y secadora y pronto nos contactaremos contigo.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
