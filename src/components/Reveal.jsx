import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Envolve o conteúdo e revela-o ao entrar no viewport.
 * delay em segundos; y = deslocamento inicial.
 */
export default function Reveal({ children, delay = 0, y = 48, className = '', ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export { EASE }
