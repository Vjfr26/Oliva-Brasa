import { motion } from 'framer-motion'

const ITEMS = [
  'Cozinha sazonal',
  'Produto local',
  'Fogo lento',
  'Garrafeira própria',
  'Eventos privados',
  'Pastelaria artesanal',
]

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-coal py-5">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 28 }}
        className="flex w-max items-center gap-10"
      >
        {row.map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap font-display text-lg italic text-cream/50"
          >
            {text}
            <span className="text-gold not-italic">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
