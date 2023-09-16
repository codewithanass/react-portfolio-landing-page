import "./App.css"
import Brands from "./components/Brands/Brands"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Portfolio from "./components/Portfolio/Portfolio"
import Services from "./components/Services/Services"
import Skills from "./components/Skills/Skills"
import SocialBanner from "./components/SocialBanner/SocialBanner"
import Testimonials from "./components/Testimonials/Testimonials"

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SocialBanner />
      <Services />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Brands />
      <Footer />
    </div>
  )
}

export default App
