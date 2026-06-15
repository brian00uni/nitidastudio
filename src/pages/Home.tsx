import Header from '../components/Header'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Technology from '../components/Technology'
import Features from '../components/Features'
import Stats from '../components/Stats'
import News from '../components/News'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="home">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Technology />
        <Features />
        <Stats />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
