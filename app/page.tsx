import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Footer />
    </main>
  )
}
