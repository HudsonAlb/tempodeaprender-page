import Header from './components/Header'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import About from './components/About'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:tap-target focus:px-4 focus:rounded-lg focus:bg-brand-yellow focus:text-brand-dark focus:font-bold focus:text-sm"
      >
        Pular para o conteúdo principal
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <BentoGrid />
        <About />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />
    </>
  )
}
