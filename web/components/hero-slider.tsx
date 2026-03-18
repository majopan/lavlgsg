"use client"

import { useState, useEffect } from "react"
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    title: "Mantenimiento de neveras y lavadoras",
    subtitle: "Mantén tus electrodomésticos en perfecto funcionamiento con Servicentro.",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1200&h=600&fit=crop",
  },
  {
    title: "Reparación de aires acondicionados",
    subtitle: "Expertos en climatización para tu hogar y oficina.",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&h=600&fit=crop",
  },
  {
    title: "Servicio técnico especializado",
    subtitle: "Personal altamente capacitado para LG y Samsung.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {slide.subtitle}
              </p>
              <Button
                asChild
                className="bg-white text-primary hover:bg-white/90 rounded-full px-6 py-3"
              >
                <a
                  href="https://wa.me/573133071356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Escríbenos
                </a>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
