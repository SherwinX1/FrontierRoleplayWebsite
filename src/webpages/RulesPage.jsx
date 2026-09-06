import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import ComingSoon from '../components/ComingSoon'

function RulesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <PageHero
        eyebrow="Community Guidelines"
        title="Server Rules"
        description="A short list of ground rules that keep Calhoun fun and fair for everyone. The full rulebook is covered in detail on the FRP Wiki."
      />

      <ComingSoon />

      <Footer />
    </div>
  )
}

export default RulesPage
