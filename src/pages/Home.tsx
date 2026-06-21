import Header from '../components/Header'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Mission from '../components/Mission'
import About from '../components/About'
// import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Stats from '../components/Stats'
// import Nitida from '../components/Nitida'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

export default function Home() {
  return (
    <div className="home">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Mission />
        <About />
        <Stats />
        {/* <Skills /> */}
        <Projects />
        
        <Contact />
        {/* <Nitida /> */}
      </main>
      <Footer />
      <ScrollTop />
    </div>
  )
}
