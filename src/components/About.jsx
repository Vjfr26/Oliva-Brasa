import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion'
import { Check } from 'lucide-react'
import Reveal from './Reveal'

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

const FEATURES = [
  'Producto local y de temporada',
  'Carta renovada cada estación',
  'Opciones vegetarianas y sin gluten',
  'Sumiller y cava propia',
]

export default function About() {
  const mediaRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ['start end', 'end start'],
  })
  const yMain = useTransform(scrollYProgress, [0, 1], [40, -40])
  const ySmall = useTransform(scrollYProgress, [0, 1], [-30, 50])

  return (
    <section id="nosotros" className="relative overflow-hidden py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Composición de imágenes con parallax */}
        <div ref={mediaRef} className="relative">
          <motion.figure
            style={{ y: yMain }}
            className="relative z-10 w-[78%] overflow-hidden border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1300&auto=format&fit=crop"
              alt="Nuestro chef emplatando un plato de autor"
              loading="lazy"
              className="h-[480px] w-full object-cover"
            />
          </motion.figure>

          <motion.figure
            style={{ y: ySmall }}
            className="absolute -bottom-10 right-0 z-20 w-[52%] overflow-hidden border-4 border-ink shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=900&auto=format&fit=crop"
              alt="Sala del restaurante"
              loading="lazy"
              className="h-[260px] w-full object-cover"
            />
          </motion.figure>

          <Reveal
            delay={0.3}
            className="absolute -top-8 right-6 z-30 flex flex-col items-center border border-gold/40 bg-ink/90 px-7 py-5 backdrop-blur-md"
          >
            <strong className="font-display text-5xl text-gold">
              <Counter to={15} />
            </strong>
            <span className="mt-1 text-center text-[11px] uppercase tracking-[0.2em] text-cream/70">
              años de
              <br />
              tradición
            </span>
          </Reveal>

          <span className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        </div>

        {/* Texto */}
        <div>
          <Reveal>
            <p className="mb-4 flex items-center gap-4 text-[13px] font-medium uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-12 bg-gold" />
              Nuestra historia
            </p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Sobre <em className="text-gold-light italic">Nosotros</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 leading-relaxed text-cream/70">
              Oliva &amp; Brasa nació en 2009 como un pequeño comedor familiar y hoy es un
              referente de la cocina de autor en la ciudad. Creemos en el producto de
              proximidad, en el fuego lento y en la mesa como punto de encuentro.
            </p>
            <p className="mt-4 leading-relaxed text-cream/70">
              Nuestro equipo, liderado por el chef Martín Oliva, reinterpreta recetas de
              siempre con técnica contemporánea. Cada temporada renovamos la carta para
              contar una nueva historia con los mejores ingredientes del momento.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[15px] text-cream/80">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                    <Check size={13} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-7">
              <div className="px-2 text-center sm:px-6">
                <strong className="font-display text-3xl text-gold sm:text-4xl">
                  <Counter to={120} suffix="+" />
                </strong>
                <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-cream/60">
                  Platos de autor
                </p>
              </div>
              <div className="px-2 text-center sm:px-6">
                <strong className="font-display text-3xl text-gold sm:text-4xl">
                  <Counter to={48} suffix="k" />
                </strong>
                <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-cream/60">
                  Clientes felices
                </p>
              </div>
              <div className="px-2 text-center sm:px-6">
                <strong className="font-display text-3xl text-gold sm:text-4xl">
                  <Counter to={12} />
                </strong>
                <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-cream/60">
                  Premios
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <a
              href="#contacto"
              className="mt-10 inline-block bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:bg-gold-light hover:scale-[1.02]"
            >
              Conócenos en persona
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
