import { IconCheck } from './icons'

const HIGHLIGHTS = [
  'Educação Infantil e Ensino Fundamental I',
  'Escada — Pernambuco',
  'Professores dedicados e especializados',
]

const STATS = [
  { value: '+20', label: 'anos de história' },
  { value: '100%', label: 'amor e dedicação' },
  { value: 'Nota 10', label: 'das famílias' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Imagem de fundo — cobre toda a section */}
      <img
        src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=1600&h=900&q=90&auto=format&fit=crop"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />

      {/* Overlay gradiente: escuro à esquerda (legibilidade) → semitransparente à direita (imagem visível) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-navy/85 via-brand-navy/60 to-brand-navy/20"
      />
      {/* Gradiente vertical extra — reforça base e topo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 via-transparent to-brand-navy/50"
      />

      {/* Faixa do uniforme — topo */}
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 flex h-1 z-10">
        <span className="flex-[3] bg-brand-sky" />
        <span className="flex-[2] bg-brand-navy" />
        <span className="flex-[1] bg-white/60" />
        <span className="flex-[1] bg-brand-green" />
        <span className="flex-[1] bg-brand-orange" />
      </div>

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">

          {/* Badge matrícula */}
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-display font-bold text-xs uppercase tracking-wider mb-6"
            role="status"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" aria-hidden="true" />
            Matrículas Abertas 2026
          </span>

          {/* Título */}
          <h1
            id="hero-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg"
          >
            Um universo de<br />
            descobertas para<br />
            <span className="text-brand-sky">o seu filho.</span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-lg drop-shadow">
            Educação Infantil e Ensino Fundamental I com metodologia ativa,
            ambiente acolhedor e professores que fazem a diferença — em Escada, PE.
          </p>

          {/* Lista de destaques */}
          <ul className="mt-6 flex flex-col gap-2" aria-label="Destaques da escola">
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
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="tap-target inline-flex items-center px-8 rounded-xl bg-brand-sky text-white font-display font-bold text-base hover:bg-brand-sky-mid transition-colors shadow-lg shadow-brand-navy/40"
              aria-label="Garantir vaga — ir para o formulário de contato"
            >
              Garantir vaga
            </a>
            <a
              href="#diferenciais"
              className="tap-target inline-flex items-center px-8 rounded-xl border-2 border-white/60 text-white font-display font-bold text-base hover:bg-white/15 backdrop-blur-sm transition-colors"
            >
              Conheça a escola
            </a>
          </div>

          {/* Strip de estatísticas */}
          <div className="mt-14 grid grid-cols-3 gap-3 max-w-md">
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
