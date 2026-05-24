import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IconCheck, IconArrowRight } from './icons'
import { IllustrationStar, IllustrationPaperPlane, IllustrationScribble } from './Illustrations'
const HIGHLIGHTS: string[] = [
  'Educação Infantil e Ensino Fundamental I',
  'Escada, Pernambuco',
  'Professores dedicados e especializados',
]

interface Stat {
  value: string
  label: string
}

const STATS: Stat[] = [
  { value: '+20', label: 'anos de história' },
  { value: '100%', label: 'amor e dedicação' },
  { value: 'Nota 10', label: 'das famílias' },
]

export default function Hero() {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    // Small delay so the entrance feels orchestrated, not instant
    const timer = setTimeout(() => setEntered(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Imagem de fundo */}
      <img
        src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=1600&h=900&q=90&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        className={[
          'absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1.4s]',
          entered ? 'scale-100' : 'scale-105',
        ].join(' ')}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        loading="eager"
      />

      {/* Overlay gradiente */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-navy/85 via-brand-navy/60 to-brand-navy/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 via-transparent to-brand-navy/50"
      />

      {/* Faixa do uniforme */}
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 flex h-1 z-10">
        <span className="flex-[3] bg-brand-sky" />
        <span className="flex-[2] bg-brand-navy" />
        <span className="flex-[1] bg-white/60" />
        <span className="flex-[1] bg-brand-green" />
        <span className="flex-[1] bg-brand-orange" />
      </div>

      {/* Elementos Lúdicos */}
      <div aria-hidden="true" className="absolute top-32 left-10 lg:left-20 text-brand-orange/60 w-16 h-16 animate-[bounce_4s_infinite] z-10 pointer-events-none">
        <IllustrationStar className="w-full h-full transform -rotate-12" />
      </div>
      <div aria-hidden="true" className="absolute bottom-10 right-10 lg:right-32 text-brand-green/60 w-24 h-24 animate-pulse z-10 pointer-events-none">
        <IllustrationScribble className="w-full h-full transform rotate-12" />
      </div>
      <div aria-hidden="true" className="absolute top-40 right-20 lg:right-40 text-brand-sky/60 w-16 h-16 z-10 pointer-events-none">
        <IllustrationPaperPlane className="w-full h-full transform rotate-45" />
      </div>

      {/* Conteúdo sobreposto — staggered entrance */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">

          {/* Badge matrícula */}
          <span
            className={[
              'inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-display font-bold text-xs uppercase tracking-wider mb-6 transition-all duration-700',
              entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ].join(' ')}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '200ms' }}
            role="status"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" aria-hidden="true" />
            Matrículas Abertas 2026
          </span>

          {/* Título */}
          <h1
            id="hero-heading"
            className={[
              'font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg transition-all duration-700',
              entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
            ].join(' ')}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '350ms' }}
          >
            Um universo de<br />
            descobertas para<br />
            <span className="text-brand-sky">o seu filho.</span>
          </h1>

          {/* Subtítulo */}
          <p
            className={[
              'mt-6 text-lg text-white/85 leading-relaxed max-w-lg drop-shadow transition-all duration-700',
              entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
            ].join(' ')}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '500ms' }}
          >
            Educação Infantil e Ensino Fundamental I com metodologia ativa,
            ambiente acolhedor e professores que fazem a diferença.
          </p>

          {/* Lista de destaques */}
          <ul
            className={[
              'mt-6 flex flex-col gap-2 transition-all duration-700',
              entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ].join(' ')}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '600ms' }}
            aria-label="Destaques da escola"
          >
            {HIGHLIGHTS.map(item => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-white/90">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-green/80 flex items-center justify-center text-white">
                  <IconCheck className="w-3 h-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div
            className={[
              'mt-10 flex flex-wrap gap-4 transition-all duration-700',
              entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ].join(' ')}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '750ms' }}
          >
            <Link
              to="/contato"
              className="tap-target inline-flex items-center px-8 rounded-xl bg-brand-sky-mid text-white font-display font-bold text-base hover:bg-brand-navy transition-colors shadow-lg shadow-brand-navy/40"
              aria-label="Garantir vaga — ir para o formulário de contato"
            >
              Garantir vaga
            </Link>
            <Link
              to="/diferenciais"
              className="tap-target inline-flex items-center gap-2 px-8 rounded-xl border-2 border-white/60 text-white font-display font-bold text-base hover:bg-white/15 backdrop-blur-sm transition-colors"
            >
              Conheça a escola
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Strip de estatísticas */}
          <div
            className={[
              'mt-14 grid grid-cols-3 gap-3 max-w-md transition-all duration-700',
              entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ].join(' ')}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '900ms' }}
          >
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-center"
                aria-hidden="true"
              >
                <p className="font-display font-extrabold text-xl text-white leading-tight">{value}</p>
                <p className="text-xs text-white/70 mt-0.5 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
