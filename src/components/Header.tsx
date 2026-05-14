import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconMenu, IconClose } from './icons'

interface NavLink {
  to: string
  label: string
}

const NAV_LINKS: NavLink[] = [
  { to: '/',              label: 'Início'        },
  { to: '/sobre',         label: 'Sobre Nós'    },
  { to: '/equipe',        label: 'Equipe'        },
  { to: '/diferenciais',  label: 'Diferenciais'  },
  { to: '/depoimentos',   label: 'Depoimentos'   },
  { to: '/contato',       label: 'Contato'        },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  /* Muda aparência ao rolar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Fecha menu ao mudar de rota */
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const transparent = isHome && !scrolled && !menuOpen

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        transparent
          ? 'bg-transparent border-b border-white/10'
          : 'bg-white/95 backdrop-blur-md border-b border-brand-sky-light shadow-sm shadow-brand-navy/5',
      ].join(' ')}
    >
      {/* Faixa do uniforme — só aparece quando scrollado ou página interna */}
      <div
        aria-hidden="true"
        className={[
          'flex h-0.5 transition-all duration-300',
          scrolled || !isHome ? 'opacity-100' : 'opacity-0',
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
          <Link
            to="/"
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
          </Link>

          {/* Nav desktop */}
          <nav aria-label="Menu principal" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => {
              const isActive = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
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
                </Link>
              )
            })}
          </nav>

          {/* CTA desktop — destaque principal */}
          <Link
            to="/contato"
            className={[
              'hidden md:flex tap-target items-center gap-2 px-6 rounded-xl font-display font-bold text-sm transition-all duration-300 relative overflow-hidden group',
              transparent
                ? 'bg-brand-sky text-white hover:bg-brand-sky-mid shadow-lg shadow-brand-sky/30'
                : 'bg-gradient-to-r from-brand-sky to-brand-sky-mid text-white hover:from-brand-sky-mid hover:to-brand-navy-light shadow-md shadow-brand-sky/25 hover:shadow-lg hover:shadow-brand-sky/40',
            ].join(' ')}
            aria-label="Faça sua matrícula"
          >
            {/* Shimmer effect */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
            />
            <span className="relative">Matricule-se</span>
            <svg className="relative w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

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
          {NAV_LINKS.map(({ to, label }) => {
            const isActive = location.pathname === to
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={[
                    'tap-target flex items-center px-2 text-sm font-medium transition-colors rounded',
                    isActive ? 'text-brand-navy font-bold' : 'text-brand-gray-mid hover:text-brand-navy',
                  ].join(' ')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {/* Indicador lateral de seção ativa */}
                  <span
                    aria-hidden="true"
                    className={[
                      'w-1 rounded-full mr-3 transition-all duration-200 flex-shrink-0',
                      isActive ? 'h-4 bg-brand-sky' : 'h-0 bg-transparent',
                    ].join(' ')}
                  />
                  {label}
                </Link>
              </li>
            )
          })}
          <li>
            <Link
              to="/contato"
              className="tap-target mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-sky to-brand-sky-mid text-white font-display font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              Matricule-se
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
