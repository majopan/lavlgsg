"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  })
  const [captcha, setCaptcha] = useState({ num1: 5, num2: 4, answer: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Simple captcha validation
    if (parseInt(captcha.answer) !== captcha.num1 + captcha.num2) {
      alert("Por favor, resuelve correctamente la operación matemática.")
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">¡Mensaje enviado!</h3>
        <p className="text-muted-foreground text-sm">
          Pronto nos pondremos en contacto contigo.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Nombres y apellidos"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="rounded-lg border-gray-300"
        />
      </div>

      <div>
        <Input
          type="tel"
          placeholder="Número de celular o WhatsApp"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="rounded-lg border-gray-300"
        />
      </div>

      <div>
        <Input
          type="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="rounded-lg border-gray-300"
        />
      </div>

      <div>
        <Textarea
          placeholder="Descripción"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
          rows={4}
          className="rounded-lg border-gray-300 resize-none"
        />
      </div>

      {/* Simple Math Captcha */}
      <div className="flex items-center gap-4">
        <span className="text-muted-foreground text-sm">
          {captcha.num1} + {captcha.num2} =
        </span>
        <Input
          type="number"
          value={captcha.answer}
          onChange={(e) => setCaptcha({ ...captcha, answer: e.target.value })}
          required
          className="w-20 rounded-lg border-gray-300"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary hover:bg-primary/90 text-white rounded-lg ml-auto"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        Conoce nuestra{" "}
        <a href="#" className="text-primary hover:underline">
          política de protección de datos
        </a>
        .
      </p>
    </form>
  )
}
