import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'

export default function ContatoPage() {
  return (
    <>
      <PageHero
        title="Fale Conosco"
        subtitle="Tire suas dúvidas, agende uma visita ou solicite informações sobre matrículas. Estamos prontos para receber sua família!"
        breadcrumb="Contato"
      />
      <ContactForm />
    </>
  )
}
