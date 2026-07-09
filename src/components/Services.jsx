import { motion } from 'framer-motion'
import { ChefHat, PartyPopper, Truck, Wine, Croissant, GraduationCap, ArrowRight } from 'lucide-react'
import Reveal, { EASE } from './Reveal'

const SERVICES = [
  {
    icon: ChefHat,
    title: 'Cozinha Gourmet',
    text: 'Menu de degustação sazonal com produto local e técnica de vanguarda, assinado pelo nosso chef executivo.',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop',
    span: 'lg:col-span-2',
  },
  {
    icon: PartyPopper,
    title: 'Eventos Privados',
    text: 'Salões exclusivos para celebrações, jantares de empresa e reuniões íntimas com menus à medida.',
    img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop',
    span: '',
  },
  {
    icon: Truck,
    title: 'Catering & Domicílio',
    text: 'Levamos a nossa cozinha ao seu evento: casamentos, aniversários e encontros corporativos.',
    img: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop',
    span: '',
  },
  {
    icon: Wine,
    title: 'Garrafeira & Harmonização',
    text: 'Mais de 300 rótulos selecionados pelo nosso escanção para acompanhar cada prato.',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop',
    span: '',
  },
  {
    icon: Croissant,
    title: 'Pastelaria Artesanal',
    text: 'Sobremesas de autor e padaria própria cozida todas as manhãs: o final doce que a sua mesa merece.',
    img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop',
    span: '',
  },
  {
    icon: GraduationCap,
    title: 'Workshops de Cozinha',
    text: 'Aprenda técnicas, segredos e receitas junto da nossa equipa na cozinha do Oliva & Brasa.',
    img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop',
    span: '',
  },
]

function ServiceCard({ service, index }) {
  const Icon = service.icon
  return (
    <motion.article
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease: EASE }}
      className={`group relative flex min-h-[380px] flex-col justify-end overflow-hidden border border-white/8 bg-coal ${service.span}`}
    >
      {/* Imagem de fundo com zoom em hover */}
      <img
        src={service.img}
        alt={service.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />

      <div className="relative z-10 p-7">
        <span className="mb-4 inline-flex h-12 w-12 items-center justify-center border border-gold/40 bg-ink/60 text-gold backdrop-blur-sm transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
          <Icon size={22} />
        </span>
        <span className="absolute right-7 top-0 font-display text-6xl italic text-white/8 transition-colors duration-300 group-hover:text-gold/20">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="font-display text-2xl">{service.title}</h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-cream/65">
          {service.text}
        </p>
      </div>

      {/* Linha dourada inferior que cresce em hover */}
      <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
    </motion.article>
  )
}

export default function Services() {
  return (
    <section id="servicos" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mb-16 max-w-2xl">
          <p className="mb-4 flex items-center gap-4 text-[13px] font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-12 bg-gold" />
            O que oferecemos
          </p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Os Nossos <em className="text-gold-light italic">Serviços</em>
          </h2>
          <p className="mt-5 text-lg text-cream/60">
            Uma proposta gastronómica completa: do almoço íntimo à grande celebração.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}

          {/* Tile CTA para fechar a grelha */}
          <motion.a
            href="#contacto"
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="group relative flex min-h-[380px] flex-col items-start justify-between overflow-hidden border border-gold/30 bg-gradient-to-br from-coal to-ink p-7 transition-colors duration-500 hover:border-gold lg:col-span-2"
          >
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.3em] text-gold">
                Um evento especial?
              </p>
              <h3 className="mt-4 max-w-md font-display text-3xl leading-snug">
                Desenhamos a experiência perfeita para a sua ocasião.{' '}
                <em className="text-gold-light italic">Vamos conversar.</em>
              </h3>
            </div>
            <span className="inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
              Contactar agora
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
            </span>
            <span className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl transition-opacity duration-700 group-hover:opacity-100 opacity-40" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
