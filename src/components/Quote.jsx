import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './Reveal'

export default function Quote() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <section ref={ref} className="relative flex min-h-[60vh] items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2200&auto=format&fit=crop"
          alt="Corte maturado na brasa"
          loading="lazy"
          className="h-[130%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
      </motion.div>

      <div className="mx-auto max-w-4xl px-6 py-28 text-center">
        <Reveal>
          <span className="font-display text-7xl leading-none text-gold">“</span>
          <blockquote className="font-display text-3xl leading-snug sm:text-4xl lg:text-[2.8rem]">
            A cozinha é a linguagem com que contamos{' '}
            <em className="text-gold-light italic">quem somos</em>
          </blockquote>
          <p className="mt-8 text-[13px] font-medium uppercase tracking-[0.3em] text-cream/60">
            — Chef Martín Oliva
          </p>
        </Reveal>
      </div>
    </section>
  )
}
