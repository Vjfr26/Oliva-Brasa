import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'

const INFO = [
  {
    icon: MapPin,
    title: 'Morada',
    lines: ['Av. dos Sabores 123', 'Centro Histórico'],
  },
  {
    icon: Phone,
    title: 'Telefone',
    lines: ['+351 912 345 678'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['reservas@olivaebrasa.pt'],
  },
  {
    icon: Clock,
    title: 'Horário',
    lines: ['Ter – Dom · 13:00–16:00 / 20:00–23:30', 'Segunda encerrado'],
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
            Vamos conversar
          </p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Contacto <em className="text-gold-light italic">&amp; Reservas</em>
          </h2>
          <p className="mt-5 text-lg text-cream/60">
            Reserve a sua mesa ou conte-nos sobre o seu próximo evento. Responderemos
            em menos de 24 horas.
          </p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Informação de contacto */}
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

          {/* Formulário */}
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
                    <h3 className="font-display text-3xl">Pedido enviado!</h3>
                    <p className="mt-4 max-w-sm text-cream/65">
                      Obrigado por nos escrever. A nossa equipa confirmará a sua reserva
                      em menos de 24 horas.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-8 border border-gold/60 px-6 py-3 text-[13px] font-medium uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
                    >
                      Enviar outro pedido
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
                        <label htmlFor="nome" className="mb-2 block text-[13px] uppercase tracking-[0.15em] text-cream/60">
                          Nome *
                        </label>
                        <input id="nome" name="nome" type="text" required placeholder="O seu nome" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-[13px] uppercase tracking-[0.15em] text-cream/60">
                          Email *
                        </label>
                        <input id="email" name="email" type="email" required placeholder="seu@email.com" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="data" className="mb-2 block text-[13px] uppercase tracking-[0.15em] text-cream/60">
                          Data
                        </label>
                        <input id="data" name="data" type="date" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="pessoas" className="mb-2 block text-[13px] uppercase tracking-[0.15em] text-cream/60">
                          Pessoas
                        </label>
                        <select id="pessoas" name="pessoas" className={inputClass}>
                          <option value="2">2 pessoas</option>
                          <option value="4">4 pessoas</option>
                          <option value="6">6 pessoas</option>
                          <option value="8+">8 ou mais</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mensagem" className="mb-2 block text-[13px] uppercase tracking-[0.15em] text-cream/60">
                        Mensagem
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        rows="4"
                        placeholder="Conte-nos sobre a sua reserva ou evento..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 bg-gold py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:bg-gold-light"
                    >
                      Enviar pedido
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
