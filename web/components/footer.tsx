import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">SERVICENTRO</span>
            </Link>
            <p className="text-white/80 text-sm">
              Servicio técnico especializado en neveras, lavadoras, secadoras y aires acondicionados LG y Samsung.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios/neveras" className="text-white/80 hover:text-white transition-colors">
                  Neveras
                </Link>
              </li>
              <li>
                <Link href="/servicios/lavadoras" className="text-white/80 hover:text-white transition-colors">
                  Lavadoras
                </Link>
              </li>
              <li>
                <Link href="/servicios/secadoras" className="text-white/80 hover:text-white transition-colors">
                  Secadoras
                </Link>
              </li>
              <li>
                <Link href="/servicios/aires-acondicionados" className="text-white/80 hover:text-white transition-colors">
                  Aires Acondicionados
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:3133071356" className="text-white/80 hover:text-white transition-colors">
                  313 307 1356
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:servicentrobogota15@gmail.com" className="text-white/80 hover:text-white transition-colors text-sm">
                  servicentrobogota15@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Carrera 106 # 71A-33, Bogotá, Colombia
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Servicentro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
