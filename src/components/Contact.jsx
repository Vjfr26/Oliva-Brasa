import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'

const INFO = [
  {
    icon: MapPin,
    title: 'Dirección',
    lines: ['Av. de los Sabores 123', 'Centro Histórico'],
  },
  {
    icon: Phone,
    title: 'Teléfono',
    lines: ['+34 912 345 678'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['reservas@olivaybrasa.com'],
  },
  {
    icon: Clock,
    title: 'Horario',
    lines: ['Mar – Dom · 13:00–16:00 / 20:00–23:30', 'Lunes cerrado'],
  },
]

const inputClass =
  'w-full border border-white/10 bg-white/5 px-4 py-3.5 text-[15px] text-cream placeholder:text-cream/35 outline-none transition-colors duration-300 focus:border-gold/70 focus:bg-white/8'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-16 max-w-2xl">
          <p className="mb-4 flex items-center gap-4 text-[13px] font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-12 bg-gold" />
            Hablemos
          </p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Contacto <em className="text-gold-light italic">&amp; Reservas</em>
          </h2>
          <p className="mt-5 text-lg text-cream/60">
            Reserva tu mesa o cuéntanos sobre tu próximo evento. Te responderemos en
            menos de 24 horas.
          </p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Información de contacto */}
          <div className="space-y-5 lg:col-span-2">
            {INFO.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="group flex items-start gap-5 border border-white/8 bg-coal p-6 transition-colors duration-300 hover:border-gold/40">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                      <Icon size={20} />
                    </span>
                    <div>
                      <strong className="mb-1 block text-[13px] uppercase tracking-[0.2em] text-gold">
                        {item.title}
                      </strong>
                      {item.lines.map((line) => (
                        <p key={line} className="text-[15px] leading-relaxed text-cream/75">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* Formulario */}
          <Reveal delay={0.2} className="lg:col-span-3">
            <div className="relative border border-white/10 bg-coal/80 p-8 backdrop-blur-sm sm:p-10">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 180, damping: 12, delay: 0.15 }}
                      className="mb-6 text-gold"
                    >
                      <CheckCircle2 size={72} strokeWidth={1.2} />
                    </motion.span>
                    <h3 className="font-display text-3xl">¡Solicitud enviada!</h3>
                    <p className="mt-4 max-w-sm text-cream/65">
                      Gracias por escribirnos. Nuestro equipo confirmará tu reserva en
                      menos de 24 horas.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-8 border border-gold/60 px-6 py-3 text-[13px] font-medium uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
                    >
                      Enviar otra solicitud
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="nombre" className="mb-2 block text-[13px] uppercase tracking-[0.15em] text-cream/60">
                          Nombre *
                        </label>
                        <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-[13px] uppercase tracking-[0.15em] text-cream/60">
                          Email *
                        </label>
                        <input id="email" name="email" type="email" required placeholder="tu@email.com" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="fecha" className="mb-2 block text-[13px] uppercase tracking-[0.15em] text-cream/60">
                          Fecha
                        </label>
                        <input id="fecha" name="fecha" type="date" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="personas" className="mb-2 block text-[13px] uppercase tracking-[0.15em] text-cream/60">
                          Personas
                        </label>
                        <select id="personas" name="personas" className={inputClass}>
                          <option value="2">2 personas</option>
                          <option value="4">4 personas</option>
                          <option value="6">6 personas</option>
                          <option value="8+">8 o más</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="mb-2 block text-[13px] uppercase tracking-[0.15em] text-cream/60">
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        placeholder="Cuéntanos sobre tu reserva o evento..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 bg-gold py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:bg-gold-light"
                    >
                      Enviar solicitud
                      <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
