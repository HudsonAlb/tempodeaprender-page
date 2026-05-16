import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import About from '@/components/About'
import { useReveal, useStaggerReveal } from '@/hooks/useReveal'
import { IconArrowRight } from '@/components/icons'

const TIMELINE = [
  { year: '2003', title: 'Fundação', text: 'A Escola Tempo de Aprender abre suas portas em Escada-PE com a missão de transformar vidas através da educação.', colorBg: 'bg-brand-sky', colorText: 'text-brand-sky-mid' },
  { year: '2010', title: 'Expansão', text: 'Ampliação do espaço físico e adoção de metodologia ativa, incorporando atividades lúdicas ao currículo.', colorBg: 'bg-brand-orange', colorText: 'text-brand-orange' },
  { year: '2018', title: 'Inclusão', text: 'Programa de inclusão fortalecido com ações no Abril Azul e acolhimento à diversidade em todas as turmas.', colorBg: 'bg-brand-green', colorText: 'text-brand-green' },
  { year: '2024', title: 'Referência regional', text: 'Reconhecida pela comunidade como escola de excelência em Escada e região, com mais de 20 anos de dedicação.', colorBg: 'bg-brand-sky-mid', colorText: 'text-brand-sky-mid' },
]

const STATS = [
  { number: '20+', label: 'anos educando em Escada-PE' },
  { number: '2003', label: 'ano de fundação' },
  { number: '5★', label: 'avaliação da comunidade' },
]

export default function SobrePage() {
  const [statsRef, statsVisible, statsStagger] = useStaggerReveal<HTMLDivElement>()
  const [tlHeadRef, tlHeadVisible] = useReveal<HTMLDivElement>()
  const [tlRef, tlVisible, tlStagger] = useStaggerReveal<HTMLDivElement>({ threshold: 0.05 })
  const [ctaRef, ctaVisible] = useReveal<HTMLDivElement>()

  return (
    <>
      <PageHero
        title="Sobre a Escola"
        subtitle="Conheça a história, a missão e os valores que fazem da Tempo de Aprender referência em educação infantil em Escada-PE."
        breadcrumb="Sobre Nós"
      />
      <About />

      {/* Stats strip */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={statsRef}
            className={`reveal grid grid-cols-1 sm:grid-cols-3 gap-0 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10 ${statsVisible ? 'visible' : ''}`}
          >
            {STATS.map(({ number, label }, i) => (
              <div key={label} className="reveal-child py-6 sm:py-0" style={{ transitionDelay: statsStagger(i) }}>
                <p className="font-display font-extrabold text-4xl sm:text-5xl text-white">{number}</p>
                <p className="mt-2 text-xs sm:text-sm text-white/60 font-display leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={tlHeadRef}
            className={`reveal text-center mb-14 ${tlHeadVisible ? 'visible' : ''}`}
          >
            <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-orange">
              Nossa trajetória
            </span>
            <h2 className="mt-2 font-display font-extrabold text-3xl text-brand-navy">
              Marcos importantes
            </h2>
          </div>

          <div
            ref={tlRef}
            className={`reveal space-y-8 ${tlVisible ? 'visible' : ''}`}
          >
            {TIMELINE.map(({ year, title, text, colorBg, colorText }, i) => (
              <div
                key={year}
                className="reveal-child flex gap-6 items-start"
                style={{ transitionDelay: tlStagger(i) }}
              >
                <div className="flex-shrink-0 w-16 text-center">
                  <span className={`font-display font-extrabold text-lg ${colorText}`}>{year}</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${colorBg}`} />
                  {i < TIMELINE.length - 1 && <div className="w-0.5 h-16 bg-brand-sky-light mt-1" />}
                </div>
                <div className="pb-4">
                  <h3 className="font-display font-bold text-brand-navy">{title}</h3>
                  <p className="mt-1 text-sm text-brand-gray-mid leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-sky/10 blur-3xl" />
        <div aria-hidden="true" className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-orange/10 blur-3xl" />
        <div
          ref={ctaRef}
          className={`reveal relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${ctaVisible ? 'visible' : ''}`}
        >
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-sky">
            Venha nos conhecer
          </span>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-white">
            Faça parte da nossa história
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
            Agende uma visita e venha conhecer de perto a escola que cuida do seu filho com amor, método e dedicação.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contato"
              className="tap-target inline-flex items-center gap-2 px-8 rounded-xl bg-brand-sky-mid text-white font-display font-bold text-base hover:bg-brand-navy transition-colors shadow-lg"
            >
              Fale conosco <IconArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/diferenciais"
              className="tap-target inline-flex items-center px-8 rounded-xl border-2 border-white/40 text-white font-display font-bold text-base hover:bg-white/10 transition-colors"
            >
              Ver nossos diferenciais
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
