import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import Mission from '../components/Mission'
import Activities from '../components/Activities'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Welcome />
      <Mission />
      <Activities />
      <Footer />
    </div>
  )
}

export default LandingPage
