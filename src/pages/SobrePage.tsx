import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import About from '@/components/About'
import SEO from '@/components/SEO'
import ImageWithSkeleton from '@/components/ImageWithSkeleton'
import { useReveal, useStaggerReveal } from '@/hooks/useReveal'
import { IconArrowRight } from '@/components/icons'

interface TimelineItem {
  year: string;
  title: string;
  text: string;
  colorBg: string;
  colorText: string;
  photo?: string;
  expandedText?: string;
}

const TIMELINE: TimelineItem[] = [
  { 
    year: '2003', 
    title: 'O início de um sonho', 
    text: 'A Escola Tempo de Aprender nasce em Escada-PE com o firme compromisso de oferecer um espaço educativo baseado no afeto e no acolhimento familiar.', 
    colorBg: 'bg-brand-sky', 
    colorText: 'text-brand-sky-mid',
    photo: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=400&q=85&auto=format&fit=crop',
    expandedText: 'Tudo começou com uma pequena estrutura e o ideal de acolher cada criança de forma única. Desde o primeiro dia, nosso foco foi criar um ambiente caloroso, onde os primeiros passos do aprendizado fossem permeados de descobertas lúdicas, segurança e proximidade com as famílias.'
  },
  { 
    year: '2010', 
    title: 'Estrutura e inovação', 
    text: 'Ampliamos nossos espaços e integramos metodologias ativas ao currículo, transformando a aprendizagem em uma aventura dinâmica.', 
    colorBg: 'bg-brand-orange', 
    colorText: 'text-brand-orange',
    photo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&q=85&auto=format&fit=crop',
    expandedText: 'Construímos novas salas de aula amplas, estruturamos nossa biblioteca e implementamos um espaço recreativo moderno. A inovação pedagógica entrou em cena com projetos focados na curiosidade científica, expressão artística e autonomia no Ensino Fundamental I.'
  },
  { 
    year: '2018', 
    title: 'Educação para todos', 
    text: 'Fortalecemos nosso programa de inclusão e apoio especializado, garantindo que a diversidade seja acolhida e valorizada diariamente.', 
    colorBg: 'bg-brand-green', 
    colorText: 'text-brand-green',
    photo: 'https://images.unsplash.com/photo-1601339434203-130259102db6?w=800&h=400&q=85&auto=format&fit=crop',
    expandedText: 'A Tempo de Aprender investiu na formação continuada de seus profissionais para atender à neurodiversidade de forma integrada e humanizada. Campanhas ativas (como o Abril Azul) passaram a fazer parte do nosso DNA de inclusão.'
  },
  { 
    year: '2024', 
    title: 'Consolidação e orgulho', 
    text: 'Com mais de duas décadas de história, celebramos a confiança de gerações de famílias escadenses e o sucesso de nossos ex-alunos.', 
    colorBg: 'bg-brand-sky-mid', 
    colorText: 'text-brand-sky-mid',
    photo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=400&q=85&auto=format&fit=crop',
    expandedText: 'Hoje, somos orgulhosamente uma das instituições mais tradicionais e respeitadas da região. Continuamos nos reinventando a cada dia, mas mantendo a mesma essência: acolher com amor para preparar cidadãos capazes de mudar o mundo.'
  },
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
  const [expandedYear, setExpandedYear] = useState<string | null>(null)

  return (
    <>
      <SEO
        title="Sobre Nós — Escola Tempo de Aprender em Escada, PE"
        description="Nossa história, missão, visão e valores. Com mais de 20 anos de tradição em Escada, PE, a Tempo de Aprender oferece educação de excelência."
        keywords="escola tempo de aprender, escola infantil Escada PE, ensino fundamental Escada PE, história escola tempo de aprender, sobre tempo de aprender"
      />
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
            className={`reveal space-y-4 ${tlVisible ? 'visible' : ''}`}
          >
            {TIMELINE.map(({ year, title, text, colorBg, colorText, photo, expandedText }, i) => {
              const isExpanded = expandedYear === year
              return (
                <div
                  key={year}
                  className="reveal-child flex gap-4 sm:gap-6 items-stretch"
                  style={{ transitionDelay: tlStagger(i) }}
                >
                  <div className="flex-shrink-0 w-12 sm:w-16 text-right pt-4">
                    <span className={`font-display font-extrabold text-base sm:text-lg ${colorText}`}>{year}</span>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center pt-5">
                    <div className={`w-3 h-3 rounded-full ${colorBg} transition-all duration-300 ${isExpanded ? 'ring-4 ring-offset-2 ring-brand-sky/30' : ''}`} />
                    {i < TIMELINE.length - 1 && <div className="w-0.5 h-full bg-brand-sky-light/80 mt-4 min-h-[4rem]" />}
                  </div>
                  <div className="pb-8 w-full max-w-2xl">
                    <button 
                      onClick={() => setExpandedYear(isExpanded ? null : year)}
                      className={`text-left w-full group focus:outline-none rounded-xl p-4 sm:p-5 transition-all duration-300 ${isExpanded ? 'bg-white shadow-md' : 'hover:bg-white/60'}`}
                      aria-expanded={isExpanded}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-display font-bold text-brand-navy text-lg group-hover:text-brand-sky-mid transition-colors">{title}</h3>
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full border border-brand-sky-light flex items-center justify-center text-brand-sky-mid transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-brand-sky-pale' : ''}`}>
                           <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                      </div>
                      <p className="mt-2 text-sm sm:text-base text-brand-gray-mid leading-relaxed">{text}</p>
                      
                      {/* Expanded Content */}
                      <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          {photo && (
                            <div className="h-40 sm:h-56 w-full rounded-xl overflow-hidden mb-4 relative">
                              <ImageWithSkeleton 
                                src={photo} 
                                alt={`Marco de ${year}`} 
                                className="w-full h-full object-cover" 
                                wrapperClassName="absolute inset-0 w-full h-full"
                              />
                            </div>
                          )}
                          <p className="text-sm sm:text-base text-brand-dark leading-relaxed pb-2">{expandedText}</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )
            })}
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
