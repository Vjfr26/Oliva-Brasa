import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { MapPin, ArrowUp } from 'lucide-react'

function InstagramIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre Nós', href: '#nos' },
  { label: 'Testemunhos', href: '#testemunhos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const [showTop, setShowTop] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setShowTop(y > 600))

  return (
    <footer className="border-t border-white/8 bg-coal">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <a href="#inicio" className="font-display text-2xl">
            Oliva <em className="text-gold italic">&amp;</em> Brasa
          </a>
          <p className="mt-4 text-[15px] leading-relaxed text-cream/55">
            Cozinha de autor com alma de casa. Produto local, fogo lento e
            hospitalidade desde 2009.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: InstagramIcon, label: 'Instagram' },
              { icon: FacebookIcon, label: 'Facebook' },
              { icon: MapPin, label: 'Como chegar' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-cream/60 transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.25em] text-gold">
            Navegação
          </h4>
          <ul className="space-y-3">
            {NAV.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[15px] text-cream/60 transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.25em] text-gold">
            Contacto
          </h4>
          <ul className="space-y-3 text-[15px] text-cream/60">
            <li>
              <a href="tel:+351912345678" className="transition-colors hover:text-gold">
                +351 912 345 678
              </a>
            </li>
            <li>
              <a href="mailto:reservas@olivaebrasa.pt" className="transition-colors hover:text-gold">
                reservas@olivaebrasa.pt
              </a>
            </li>
            <li>Av. dos Sabores 123, Centro Histórico</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.25em] text-gold">
            Horário
          </h4>
          <ul className="space-y-3 text-[15px] text-cream/60">
            <li className="flex justify-between gap-4">
              <span>Ter – Sex</span>
              <span className="text-cream/80">13:00 – 23:30</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sáb – Dom</span>
              <span className="text-cream/80">12:00 – 00:00</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Segunda</span>
              <span className="text-gold">Encerrado</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8 py-6">
        <p className="text-center text-[13px] text-cream/40">
          © 2026 Oliva &amp; Brasa · Todos os direitos reservados
        </p>
      </div>

      {/* Botão voltar ao topo */}
      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#inicio"
            aria-label="Voltar ao topo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-7 right-7 z-50 flex h-12 w-12 items-center justify-center border border-gold/50 bg-ink/85 text-gold backdrop-blur-md transition-colors duration-300 hover:bg-gold hover:text-ink"
          >
            <ArrowUp size={18} />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  )
}
