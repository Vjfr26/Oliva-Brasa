import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Star, ArrowDown } from 'lucide-react'
import { EASE } from './Reveal'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.5 } },
}

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section id="inicio" ref={ref} className="relative flex min-h-screen items-center overflow-hidden">
      {/* Fundo com parallax + zoom lento */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2200&auto=format&fit=crop"
          alt="Interior elegante do restaurante Oliva & Brasa"
          className="h-[120%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="mx-auto w-full max-w-7xl px-6 pt-28 pb-20 lg:px-10"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p
            variants={item}
            className="mb-6 flex items-center gap-4 text-[13px] font-medium uppercase tracking-[0.3em] text-gold"
          >
            <span className="h-px w-12 bg-gold" />
            Cozinha de autor · Desde 2009
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl leading-[1.08] sm:text-6xl lg:text-[5.2rem]"
          >
            A arte da boa mesa,{' '}
            <em className="text-gold-light italic">feita experiência</em>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-cream/70">
            Ingredientes da estação, fogo lento e uma paixão que se serve em
            cada prato. Bem-vindo ao Oliva &amp; Brasa.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#contacto"
              className="group relative overflow-hidden bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-ink transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10">Reservar Mesa</span>
              <span className="absolute inset-0 -translate-x-full bg-gold-light transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#servicos"
              className="border border-cream/30 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Descobrir Mais
            </a>
          </motion.div>

          {/* Cartão flutuante de avaliação */}
          <motion.div
            variants={item}
            className="mt-14 inline-flex items-center gap-4 border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md"
          >
            <div className="flex gap-1 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <p className="text-sm text-cream/80">
              <strong className="text-cream">4.9 / 5</strong> · mais de 2.400 avaliações
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.a
        href="#servicos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-cream/50 transition-colors hover:text-gold md:flex"
        aria-label="Ir para serviços"
      >
        Deslize
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  )
}
