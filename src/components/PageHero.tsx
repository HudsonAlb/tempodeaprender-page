import { Link } from 'react-router-dom'
import { IconChevronRight } from './icons'
import { IllustrationStar, IllustrationDots } from './Illustrations'
interface PageHeroProps {
  title: string
  subtitle: string
  breadcrumb: string
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-brand-navy pt-28 pb-16 overflow-hidden">
      {/* Faixa do uniforme — topo */}
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 flex h-1 z-10">
        <span className="flex-[3] bg-brand-sky" />
        <span className="flex-[2] bg-brand-navy-light" />
        <span className="flex-[1] bg-white/60" />
        <span className="flex-[1] bg-brand-green" />
        <span className="flex-[1] bg-brand-orange" />
      </div>

      {/* Gradiente decorativo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-sky/20"
      />

      {/* Círculos decorativos */}
      <div aria-hidden="true" className="absolute top-10 right-10 w-64 h-64 rounded-full bg-brand-sky/5 blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-brand-orange/5 blur-3xl" />

      {/* Elementos Lúdicos */}
      <div aria-hidden="true" className="absolute top-20 right-[15%] text-brand-orange/40 w-12 h-12 rotate-12 z-10 pointer-events-none">
        <IllustrationStar className="w-full h-full" />
      </div>
      <div aria-hidden="true" className="absolute bottom-10 left-[15%] text-brand-sky/40 w-16 h-16 -rotate-12 z-10 pointer-events-none">
        <IllustrationDots className="w-full h-full" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-white/60">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Início
              </Link>
            </li>
            <li aria-hidden="true">
              <IconChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <span className="text-white font-medium">{breadcrumb}</span>
            </li>
          </ol>
        </nav>

        <h1 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg text-white/75 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
