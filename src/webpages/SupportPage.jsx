import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import ComingSoon from '../components/ComingSoon'

function SupportPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <PageHero
        eyebrow="We're Here to Help"
        title="Support"
        description="Stuck on something, or need to reach staff? Here's the fastest way to get help."
      />

      <ComingSoon />

      <Footer />
    </div>
  )
}

export default SupportPage
