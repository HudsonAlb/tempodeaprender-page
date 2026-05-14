import PageHero from '@/components/PageHero'
import About from '@/components/About'

export default function SobrePage() {
  return (
    <>
      <PageHero
        title="Sobre a Escola"
        subtitle="Conheça a história, a missão e os valores que fazem da Tempo de Aprender referência em educação infantil em Escada-PE."
        breadcrumb="Sobre Nós"
      />
      <About />

      {/* Timeline da história */}
      <section className="py-20 bg-brand-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-orange">
              Nossa trajetória
            </span>
            <h2 className="mt-2 font-display font-extrabold text-3xl text-brand-navy">
              Marcos importantes
            </h2>
          </div>

          <div className="space-y-8">
            {[
              { year: '2003', title: 'Fundação', text: 'A Escola Tempo de Aprender abre suas portas em Escada-PE com a missão de transformar vidas através da educação.' },
              { year: '2010', title: 'Expansão', text: 'Ampliação do espaço físico e adoção de metodologia ativa, incorporando atividades lúdicas ao currículo.' },
              { year: '2018', title: 'Inclusão', text: 'Programa de inclusão fortalecido com ações no Abril Azul e acolhimento à diversidade em todas as turmas.' },
              { year: '2024', title: 'Referência regional', text: 'Reconhecida pela comunidade como escola de excelência em Escada e região, com mais de 20 anos de dedicação.' },
            ].map(({ year, title, text }, i) => (
              <div key={year} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 text-center">
                  <span className={`font-display font-extrabold text-lg ${i % 2 === 0 ? 'text-brand-sky-mid' : 'text-brand-orange'}`}>{year}</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-brand-sky' : 'bg-brand-orange'}`} />
                  {i < 3 && <div className="w-0.5 h-16 bg-brand-sky-light mt-1" />}
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
    </>
  )
}
