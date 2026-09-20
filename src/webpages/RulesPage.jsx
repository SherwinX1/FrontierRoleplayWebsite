import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Rulebook from '../components/Rulebook'

function RulesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Rulebook.Hero />
      <Rulebook />
      <Footer />
    </div>
  )
}

export default RulesPage
