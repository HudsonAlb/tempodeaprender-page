const PILLARS = [
  { number: '01', color: 'text-brand-sky-mid',  title: 'Missão',  body: 'Proporcionar educação de excelência com amor, criatividade e compromisso com o desenvolvimento integral de cada criança em Escada-PE.' },
  { number: '02', color: 'text-brand-green',    title: 'Visão',   body: 'Ser referência regional por oferecer um ambiente seguro, inclusivo e estimulante, onde cada aluno descobre seu potencial.' },
  { number: '03', color: 'text-brand-orange',   title: 'Valores', body: 'Amor, respeito, alegria, inclusão e comprometimento com as famílias que confiam a nós seus filhos.' },
]

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1564429238817-393bd4286b2d?w=600&h=360&q=85&auto=format&fit=crop',
    alt: 'Letras de madeira e massinha colorida para aprendizado infantil',
    caption: 'Material pedagógico',
    span: 'col-span-2',
    height: 'h-48',
  },
  {
    src: 'https://images.unsplash.com/photo-1601339434203-130259102db6?w=400&h=300&q=85&auto=format&fit=crop',
    alt: 'Sala de aula colorida da educação infantil com decoração de árvore e alfabeto',
    caption: 'Nosso espaço',
    span: '',
    height: 'h-36',
  },
  {
    src: 'https://images.unsplash.com/photo-1613950190144-4f2a84c75e8c?w=400&h=300&q=85&auto=format&fit=crop',
    alt: 'Criança montando mosaico colorido em atividade artística',
    caption: 'Arte & criatividade',
    span: '',
    height: 'h-36',
  },
]

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Grade de fotos */}
        <div className="grid grid-cols-2 gap-3">
          {PHOTOS.map(({ src, alt, caption, span, height }) => (
            <div key={caption} className={`${span} relative rounded-2xl overflow-hidden ${height} group`}>
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-display font-bold bg-brand-sky/80 backdrop-blur-sm px-2 py-1 rounded-lg">
                {caption}
              </span>
            </div>
          ))}
        </div>

        {/* Texto */}
        <div>
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-sky-mid">
            Nossa história
          </span>
          <h2
            id="about-heading"
            className="mt-2 font-display font-extrabold text-3xl sm:text-4xl text-brand-navy"
          >
            Mais de 20 anos educando com amor em Escada-PE
          </h2>
          <p className="mt-4 text-brand-gray-mid leading-relaxed">
            A Escola Tempo de Aprender nasceu do sonho de oferecer educação de qualidade,
            acessível e transformadora para a Educação Infantil e o Ensino Fundamental I.
            Hoje somos referência em Escada-PE, com metodologia ativa e foco no
            desenvolvimento humano integral.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {PILLARS.map(({ number, color, title, body }) => (
              <div key={number} className="flex gap-4">
                <span
                  className={`flex-shrink-0 font-display font-extrabold text-2xl ${color} opacity-60 w-8`}
                  aria-hidden="true"
                >
                  {number}
                </span>
                <div>
                  <h3 className="font-display font-bold text-brand-navy text-base">{title}</h3>
                  <p className="mt-1 text-sm text-brand-gray-mid leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
