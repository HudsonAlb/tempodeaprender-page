import { IconStar } from './icons'
import { useReveal, useStaggerReveal } from '@/hooks/useReveal'

interface Testimonial {
  id: number; name: string; role: string; initials: string
  avatarBg: string; stars: number; quote: string
}

const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Rejane Junior', role: 'Mãe de aluno', initials: 'RJ', avatarBg: 'bg-brand-sky', stars: 5, quote: 'A escola cuida de cada criança com muito amor e dedicação. Meu filho chegava animado todos os dias e aprendeu de um jeito que nunca imaginei ser possível. Os professores são incríveis!' },
  { id: 2, name: 'Família Oliveira', role: 'Pais de aluna da Educação Infantil', initials: 'FO', avatarBg: 'bg-brand-navy', stars: 5, quote: 'O ambiente é acolhedor, alegre e seguro. As atividades lúdicas são maravilhosas. Nossa filha chegava em casa querendo mostrar tudo o que aprendeu. É educação de verdade!' },
  { id: 3, name: 'Ana Paula Santos', role: 'Mãe de aluno do Fundamental I', initials: 'AP', avatarBg: 'bg-brand-green', stars: 5, quote: 'Eles celebram datas importantes, trabalham a inclusão e fazem nossas crianças sentirem que são especiais. Recomendo de olhos fechados para quem mora em Escada e região!' },
  { id: 4, name: 'Carla Mendonça', role: 'Mãe de aluno', initials: 'CM', avatarBg: 'bg-brand-orange', stars: 5, quote: 'A Tempo de Aprender transformou a relação do meu filho com a escola. Antes ele tinha resistência, hoje chora quando tem feriado! Os professores são apaixonados pelo que fazem.' },
  { id: 5, name: 'Família Barros', role: 'Pais de aluna da Educação Infantil', initials: 'FB', avatarBg: 'bg-brand-sky', stars: 5, quote: 'Nossa filha chegou tímida e hoje é protagonista nas apresentações. O ambiente acolhedor e as atividades lúdicas fizeram toda a diferença. Uma escola que cuida de alma!' },
  { id: 6, name: 'Patrícia Lima', role: 'Mãe de aluna do Fundamental I', initials: 'PL', avatarBg: 'bg-brand-navy', stars: 5, quote: 'Escola de alto nível em Escada-PE. Professores dedicados, ambiente seguro e um cuidado especial com cada família. A melhor escolha que fizemos para o futuro da nossa filha.' },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Avaliação: ${count} de 5 estrelas`} role="img">
      {Array.from({ length: count }).map((_, i) => (
        <IconStar key={i} className="w-4 h-4 text-brand-orange" />
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="bg-white rounded-2xl p-5 sm:p-8 flex flex-col gap-6 border-2 border-brand-sky-light hover:border-brand-sky hover:shadow-xl hover:shadow-brand-sky/10 transition-all duration-300 hover:-translate-y-1" aria-labelledby={`testimonial-name-${t.id}`}>
      <Stars count={t.stars} />
      <blockquote className="flex-1">
        <p className="text-brand-dark text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
      </blockquote>
      <footer className="flex items-center gap-3 mt-auto pt-4 border-t border-brand-sky-light">
        <span className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm flex-shrink-0 text-white ${t.avatarBg}`} aria-hidden="true">{t.initials}</span>
        <div>
          <p id={`testimonial-name-${t.id}`} className="font-display font-bold text-brand-navy text-sm">{t.name}</p>
          <p className="text-brand-gray-mid text-xs">{t.role}</p>
        </div>
      </footer>
    </article>
  )
}

export default function Testimonials() {
  const [headingRef, headingVisible] = useReveal<HTMLDivElement>()
  const [gridRef, gridVisible, staggerDelay] = useStaggerReveal<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="depoimentos" aria-labelledby="testimonials-heading" className="py-28 bg-brand-sky-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef}
          className={`reveal max-w-xl mb-16 ${headingVisible ? 'visible' : ''}`}
        >
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-orange">Depoimentos</span>
          <h2 id="testimonials-heading" className="mt-2 font-display font-extrabold text-3xl sm:text-4xl text-brand-navy">
            Quem vive a Tempo de Aprender, recomenda
          </h2>
        </div>
        <div
          ref={gridRef}
          className={`reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${gridVisible ? 'visible' : ''}`}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className="reveal-scale"
              style={{ transitionDelay: staggerDelay(i) }}
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
