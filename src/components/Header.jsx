import { useState, useEffect } from 'react'
import { IconMenu, IconClose } from './icons'

const NAV_LINKS = [
  { href: '#diferenciais', label: 'Diferenciais', id: 'diferenciais' },
  { href: '#sobre',        label: 'Sobre nós',    id: 'sobre'        },
  { href: '#depoimentos',  label: 'Depoimentos',  id: 'depoimentos'  },
  { href: '#contato',      label: 'Contato',      id: 'contato'      },
]

export default function Header() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const [activeId,   setActiveId]   = useState('')

  /* Muda aparência ao rolar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Destaca link da seção visível */
  useEffect(() => {
    const targets = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean)
    if (!targets.length) return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length) setActiveId(visible[0].target.id)
      },
      { threshold: 0.3 }
    )
    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  const transparent = !scrolled && !menuOpen

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        transparent
          ? 'bg-transparent border-b border-white/10'
          : 'bg-white/95 backdrop-blur-md border-b border-brand-sky-light shadow-sm shadow-brand-navy/5',
      ].join(' ')}
    >
      {/* Faixa do uniforme — só aparece quando scrollado */}
      <div
        aria-hidden="true"
        className={[
          'flex h-0.5 transition-all duration-300',
          scrolled ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      >
        <span className="flex-[3] bg-brand-sky" />
        <span className="flex-[2] bg-brand-navy" />
        <span className="flex-[1] bg-white" />
        <span className="flex-[1] bg-brand-green" />
        <span className="flex-[1] bg-brand-orange" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 tap-target group"
            aria-label="Tempo de Aprender — Página inicial"
          >
            <span className={[
              'w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-colors duration-300',
              transparent ? 'bg-white/20 backdrop-blur-sm' : 'bg-brand-sky',
            ].join(' ')}>
              <span className="font-display font-extrabold text-white text-base" aria-hidden="true">T</span>
            </span>
            <span className={[
              'font-display font-bold text-lg leading-tight transition-colors duration-300',
              transparent ? 'text-white' : 'text-brand-navy',
            ].join(' ')}>
              Tempo de<br />
              <span className={transparent ? 'text-brand-sky' : 'text-brand-sky-mid'}>
                Aprender
              </span>
            </span>
          </a>

          {/* Nav desktop */}
          <nav aria-label="Menu principal" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label, id }) => {
              const isActive = activeId === id
              return (
                <a
                  key={href}
                  href={href}
                  className={[
                    'tap-target px-4 flex items-center text-sm font-medium transition-colors duration-200 rounded relative group',
                    transparent
                      ? 'text-white/80 hover:text-white'
                      : isActive
                        ? 'text-brand-navy'
                        : 'text-brand-gray-mid hover:text-brand-navy',
                  ].join(' ')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                  {/* Underline deslizante */}
                  <span
                    aria-hidden="true"
                    className={[
                      'absolute bottom-2 left-4 right-4 h-0.5 rounded-full transition-all duration-300 origin-left',
                      transparent ? 'bg-white' : 'bg-brand-sky',
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60',
                    ].join(' ')}
                  />
                </a>
              )
            })}
          </nav>

          {/* CTA desktop */}
          <a
            href="#contato"
            className={[
              'hidden md:flex tap-target items-center px-5 rounded-lg font-display font-bold text-sm transition-all duration-300',
              transparent
                ? 'bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white/30'
                : 'bg-brand-navy text-white hover:bg-brand-navy-light shadow-sm',
            ].join(' ')}
            aria-label="Faça sua matrícula"
          >
            Matricule-se
          </a>

          {/* Botão menu mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen(v => !v)}
            className={[
              'md:hidden tap-target flex items-center justify-center rounded transition-colors duration-300',
              transparent ? 'text-white' : 'text-brand-navy',
            ].join(' ')}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Menu móvel"
        className={[
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
          'bg-white/95 backdrop-blur-md border-t border-brand-sky-light',
        ].join(' ')}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {NAV_LINKS.map(({ href, label, id }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className={[
                  'tap-target flex items-center px-2 text-sm font-medium transition-colors rounded',
                  activeId === id ? 'text-brand-navy font-bold' : 'text-brand-gray-mid hover:text-brand-navy',
                ].join(' ')}
                aria-current={activeId === id ? 'page' : undefined}
              >
                {/* Indicador lateral de seção ativa */}
                <span
                  aria-hidden="true"
                  className={[
                    'w-1 rounded-full mr-3 transition-all duration-200 flex-shrink-0',
                    activeId === id ? 'h-4 bg-brand-sky' : 'h-0 bg-transparent',
                  ].join(' ')}
                />
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="tap-target mt-2 flex items-center justify-center rounded-lg bg-brand-navy text-white font-display font-bold text-sm hover:bg-brand-navy-light transition-colors"
            >
              Matricule-se
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
