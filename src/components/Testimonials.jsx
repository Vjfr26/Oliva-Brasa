import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ArrowLeft, ArrowRight } from 'lucide-react'
import Reveal, { EASE } from './Reveal'

const TESTIMONIALS = [
  {
    quote:
      'Uma experiência gastronómica de outro nível. O menu de degustação é uma viagem: cada prato surpreende mais do que o anterior. O serviço, impecável do início ao fim.',
    name: 'Lucía Fernández',
    role: 'Crítica gastronómica',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
  },
  {
    quote:
      'Celebrámos o nosso aniversário num dos seus salões privados e foi perfeito. A equipa cuidou de cada detalhe e a harmonização proposta pelo escanção foi extraordinária.',
    name: 'Andrés Molina',
    role: 'Cliente habitual',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
  },
  {
    quote:
      'Contratámos o catering para o casamento da minha filha e os convidados ainda nos falam da comida. Profissionais, pontuais e com um sabor que não se esquece.',
    name: 'Carmen Ruiz',
    role: 'Evento de casamento',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop',
  },
  {
    quote:
      'O workshop de cozinha com o chef Oliva superou todas as minhas expectativas. Aprendi, ri e comi como nunca. Voltarei com toda a minha equipa de trabalho.',
    name: 'Diego Herrera',
    role: 'Workshop de cozinha',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
  },
]

export default function Testimonials() {
  const [[index, direction], setIndex] = useState([0, 1])
  const active = TESTIMONIALS[index]

  const paginate = (dir) => {
    setIndex(([i]) => [(i + dir + TESTIMONIALS.length) % TESTIMONIALS.length, dir])
  }

  // Avanço automático a cada 7 segundos
  useEffect(() => {
    const id = setInterval(() => paginate(1), 7000)
    return () => clearInterval(id)
  }, [index])

  return (
    <section id="testemunhos" className="relative overflow-hidden bg-coal py-28 lg:py-36">
      <span className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/8 blur-3xl" />

      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal className="mb-14 text-center">
          <p className="mb-4 flex items-center justify-center gap-4 text-[13px] font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-12 bg-gold" />
            Opiniões reais
            <span className="h-px w-12 bg-gold" />
          </p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            O que dizem <em className="text-gold-light italic">os nossos clientes</em>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative min-h-[340px] sm:min-h-[300px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -80 }}
                transition={{ duration: 0.55, ease: EASE }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mx-auto max-w-3xl font-display text-2xl leading-relaxed italic text-cream/90 sm:text-[1.7rem]">
                  “{active.quote}”
                </blockquote>
                <figcaption className="mt-9 flex items-center justify-center gap-4">
                  <img
                    src={active.img}
                    alt={`Retrato de ${active.name}`}
                    loading="lazy"
                    className="h-14 w-14 rounded-full border-2 border-gold/60 object-cover"
                  />
                  <div className="text-left">
                    <strong className="block text-cream">{active.name}</strong>
                    <span className="text-sm text-cream/55">{active.role}</span>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controlos */}
          <div className="mt-10 flex items-center justify-center gap-8">
            <button
              onClick={() => paginate(-1)}
              aria-label="Testemunho anterior"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="flex gap-3">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex([i, i > index ? 1 : -1])}
                  aria-label={`Ir para o testemunho ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    i === index ? 'w-8 bg-gold' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              aria-label="Testemunho seguinte"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
