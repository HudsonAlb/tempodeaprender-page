import type { ComponentType, ReactNode } from 'react'
import { useState } from 'react'
import { IconPhone, IconMail, IconPin } from './icons'

interface ContactInfo {
  id: string; Icon: ComponentType<{ className?: string }>
  label: string; value: string; href: string
}

const CONTACT_INFO: ContactInfo[] = [
  { id: 'whatsapp', Icon: IconPhone, label: 'WhatsApp', value: 'whats.link/escolatempodeaprender', href: 'https://whats.link/escolatempodeaprender' },
  { id: 'instagram', Icon: IconMail, label: 'Instagram', value: '@escolatempodeaprender24', href: 'https://www.instagram.com/escolatempodeaprender24/' },
  { id: 'endereco', Icon: IconPin, label: 'Endereço', value: 'Avenida Paulo Leite, Nº 485 — Escada, Pernambuco', href: 'https://maps.google.com/?q=Avenida+Paulo+Leite+485+Escada+Pernambuco' },
]

const SERIES: string[] = ['Educação Infantil', '1º ao 5º ano (Fundamental I)']

interface FieldProps { id: string; label: string; required?: boolean; children: ReactNode }

function Field({ id, label, required, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-brand-navy">
        {label}
        {required && <span className="text-brand-orange ml-1" aria-hidden="true">*</span>}
        {required && <span className="sr-only"> (obrigatório)</span>}
      </label>
      {children}
    </div>
  )
}

export default function ContactForm() {
  const [sent, setSent] = useState<boolean>(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contato" aria-labelledby="contact-heading" className="py-24 bg-white">
      {/* Faixa do uniforme */}
      <div aria-hidden="true" className="flex h-1 mb-0">
        <span className="flex-[3] bg-brand-sky" />
        <span className="flex-[2] bg-brand-navy" />
        <span className="flex-[1] bg-white border-y border-brand-sky-light" />
        <span className="flex-[1] bg-brand-green" />
        <span className="flex-[1] bg-brand-orange" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 grid lg:grid-cols-2 gap-16">
        {/* Info lateral */}
        <div>
          <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-sky-mid">Fale conosco</span>
          <h2 id="contact-heading" className="mt-2 font-display font-extrabold text-3xl sm:text-4xl text-brand-navy">Matrículas abertas para 2026</h2>
          <p className="mt-4 text-brand-gray-mid leading-relaxed">Entre em contato pelo formulário, WhatsApp ou Instagram. Nossa equipe responde em até 1 dia útil.</p>

          <ul className="mt-10 flex flex-col gap-5" aria-label="Informações de contato">
            {CONTACT_INFO.map(({ id, Icon, label, value, href }) => (
              <li key={id} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-sky-light flex items-center justify-center text-brand-sky-mid">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs font-medium text-brand-gray-mid">{label}</p>
                  <a href={href} className="text-sm font-medium text-brand-navy hover:text-brand-sky-mid transition-colors" aria-label={`${label}: ${value}`} target="_blank" rel="noopener noreferrer">{value}</a>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 p-5 rounded-2xl bg-brand-sky-pale border-2 border-brand-sky-light">
            <p className="font-display font-bold text-brand-navy text-sm mb-2">Horário de atendimento</p>
            <p className="text-sm text-brand-gray-mid">Segunda a sexta: 07h às 17h<br />Sábados: 08h às 12h</p>
          </div>
        </div>

        {/* Formulário */}
        <div>
          {sent ? (
            <div role="alert" aria-live="polite" className="h-full flex flex-col items-center justify-center text-center gap-4 rounded-2xl bg-brand-sky-light p-10">
              <span className="w-16 h-16 rounded-full bg-brand-sky flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <h3 className="font-display font-bold text-2xl text-brand-navy">Mensagem enviada!</h3>
              <p className="text-brand-gray-mid text-sm">Entraremos em contato em até 1 dia útil. Obrigado pelo interesse!</p>
              <button type="button" onClick={() => setSent(false)} className="tap-target mt-4 px-6 rounded-lg bg-brand-navy text-white font-display font-bold text-sm hover:bg-brand-navy-light transition-colors">Enviar outra mensagem</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-label="Formulário de contato e matrícula" className="flex flex-col gap-5">
              <Field id="nome" label="Nome completo" required>
                <input id="nome" type="text" name="nome" autoComplete="name" required className="tap-target w-full px-4 rounded-xl border-2 border-brand-sky-light text-sm text-brand-dark placeholder:text-brand-gray-mid focus:outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 transition" placeholder="Ex: Maria da Silva" aria-required="true" />
              </Field>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field id="email" label="E-mail" required>
                  <input id="email" type="email" name="email" autoComplete="email" required className="tap-target w-full px-4 rounded-xl border-2 border-brand-sky-light text-sm text-brand-dark placeholder:text-brand-gray-mid focus:outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 transition" placeholder="seu@email.com" aria-required="true" />
                </Field>
                <Field id="telefone" label="WhatsApp" required>
                  <input id="telefone" type="tel" name="telefone" autoComplete="tel" required className="tap-target w-full px-4 rounded-xl border-2 border-brand-sky-light text-sm text-brand-dark placeholder:text-brand-gray-mid focus:outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 transition" placeholder="(81) 90000-0000" aria-required="true" />
                </Field>
              </div>
              <Field id="serie" label="Segmento de interesse" required>
                <select id="serie" name="serie" required defaultValue="" className="tap-target w-full px-4 rounded-xl border-2 border-brand-sky-light text-sm text-brand-dark focus:outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 transition bg-white" aria-required="true">
                  <option value="" disabled>Selecione o segmento</option>
                  {SERIES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </Field>
              <Field id="mensagem" label="Mensagem">
                <textarea id="mensagem" name="mensagem" rows={4} className="w-full px-4 py-3 rounded-xl border-2 border-brand-sky-light text-sm text-brand-dark placeholder:text-brand-gray-mid focus:outline-none focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 transition resize-none" placeholder="Conte-nos mais sobre o que procura..." />
              </Field>
              <button type="submit" className="tap-target w-full rounded-xl bg-brand-navy text-white font-display font-bold text-base hover:bg-brand-navy-light transition-colors shadow-lg shadow-brand-navy/25">Solicitar informações</button>
              <p className="text-xs text-brand-gray-mid text-center">Seus dados estão protegidos conforme a LGPD.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
