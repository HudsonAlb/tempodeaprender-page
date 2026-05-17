import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { IconClose, IconArrowRight, IconSport } from './icons'

export default function WelcomeModal() {
  const [rendered, setRendered] = useState(false)
  const [visible, setVisible] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  /* Mostrar após 900ms a cada carregamento de página */
  useEffect(() => {
    const timer = setTimeout(() => {
      setRendered(true)
      /* Dois frames para garantir que a transição CSS dispare após o mount */
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
    }, 900)
    return () => clearTimeout(timer)
  }, [])

  /* Focar o dialog ao abrir */
  useEffect(() => {
    if (visible) dialogRef.current?.focus()
  }, [visible])

  /* Travar scroll do body enquanto o modal está aberto */
  useEffect(() => {
    if (!rendered) return
    document.body.style.overflow = visible ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [visible, rendered])

  function dismiss() {
    setVisible(false)
    setTimeout(() => setRendered(false), 350)
  }

  /* Fechar com Escape */
  useEffect(() => {
    if (!visible) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [visible])

  if (!rendered) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={dismiss}
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="copa-modal-title"
        tabIndex={-1}
        className="relative z-10 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl outline-none"
        style={{
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.94) translateY(24px)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Botão fechar */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Fechar banner"
          className="absolute top-3 right-3 z-20 tap-target w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
        >
          <IconClose className="w-4 h-4" />
        </button>

        {/* Imagem — substitua pelo arquivo da imagem IA gerada */}
        <div className="relative h-56 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&h=440&q=85&auto=format&fit=crop"
            alt="Estádio iluminado durante a Copa do Mundo 2026"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Gradiente sobre a imagem */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-brand-navy/92 via-brand-navy/35 to-transparent"
          />

          {/* Badge + título sobre a imagem */}
          <div className="absolute bottom-5 left-5 right-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-display font-bold uppercase tracking-wide">
              <IconSport className="w-3.5 h-3.5" aria-hidden="true" />
              Copa do Mundo 2026
            </span>
            <h2
              id="copa-modal-title"
              className="mt-2 font-display font-extrabold text-xl sm:text-2xl text-white leading-snug"
            >
              Garanta a vaga antes<br />do apito final!
            </h2>
          </div>
        </div>

        {/* Corpo */}
        <div className="bg-white px-6 pt-5 pb-6">
          {/* Faixa do uniforme decorativa */}
          <div aria-hidden="true" className="flex h-0.5 mb-5 -mx-6">
            <span className="flex-[3] bg-brand-sky" />
            <span className="flex-[2] bg-brand-navy" />
            <span className="flex-[1] bg-brand-green" />
            <span className="flex-[1] bg-brand-orange" />
          </div>

          <p className="text-sm text-brand-gray-mid leading-relaxed">
            2026 é o ano da{' '}
            <strong className="text-brand-navy">Copa do Mundo</strong> — e o
            melhor momento para garantir o futuro do seu filho. Matrículas
            abertas na{' '}
            <strong className="text-brand-navy">Tempo de Aprender</strong>!
          </p>

          <div className="mt-5 flex flex-col gap-2">
            <Link
              to="/contato"
              onClick={dismiss}
              className="tap-target flex items-center justify-center gap-2 px-6 rounded-xl bg-brand-sky-mid text-white font-display font-bold text-sm hover:bg-brand-navy transition-colors shadow-md"
            >
              Garantir minha vaga <IconArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="tap-target text-sm text-brand-gray-mid hover:text-brand-navy transition-colors font-display"
            >
              Agora não
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
