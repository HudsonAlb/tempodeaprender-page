import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import BentoGrid from '@/components/BentoGrid'
import { IconArrowRight } from '@/components/icons'

export default function DiferenciaisPage() {
  return (
    <>
      <PageHero
        title="Nossos Diferenciais"
        subtitle="Descubra tudo o que faz da Tempo de Aprender uma escola especial — atividades lúdicas, inclusão, cultura regional e muito mais."
        breadcrumb="Diferenciais"
      />
      <BentoGrid />

      {/* CTA para contato */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-navy">
            Quer saber mais sobre nossos diferenciais?
          </h2>
          <p className="mt-3 text-brand-gray-mid leading-relaxed">
            Agende uma visita e veja de perto como trabalhamos o desenvolvimento do seu filho.
          </p>
          <Link
            to="/contato"
            className="tap-target mt-6 inline-flex items-center gap-2 px-8 rounded-xl bg-brand-navy text-white font-display font-bold text-base hover:bg-brand-navy-light transition-colors shadow-lg"
          >
            Agendar visita <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
