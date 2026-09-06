import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import ComingSoon from '../components/ComingSoon'

function WikiPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <PageHero
        eyebrow="Knowledge Base"
        title="FRP Wiki"
        description="Everything you need to know to play Frontier Roleplay, organized in one place."
      />

      <ComingSoon />

      <Footer />
    </div>
  )
}

export default WikiPage
