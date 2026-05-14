import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import Testimonials from '@/components/Testimonials'
import { IconArrowRight } from '@/components/icons'

export default function DepoimentosPage() {
  return (
    <>
      <PageHero
        title="Depoimentos"
        subtitle="Veja o que as famílias que confiam na Tempo de Aprender têm a dizer sobre a experiência dos seus filhos."
        breadcrumb="Depoimentos"
      />
      <Testimonials />

      {/* CTA para contato */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-navy">
            Faça parte dessa história
          </h2>
          <p className="mt-3 text-brand-gray-mid leading-relaxed">
            Junte-se às famílias que escolheram a Tempo de Aprender para o futuro dos seus filhos.
          </p>
          <Link
            to="/contato"
            className="tap-target mt-6 inline-flex items-center gap-2 px-8 rounded-xl bg-brand-sky text-white font-display font-bold text-base hover:bg-brand-sky-mid transition-colors shadow-lg"
          >
            Matricule-se agora <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
