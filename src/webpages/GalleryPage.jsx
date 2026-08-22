import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import shot1 from '../assets/image-1.png'
import shot2 from '../assets/image-2.png'
import shot3 from '../assets/image-3.png'
import shot4 from '../assets/image-4.png'
import shot5 from '../assets/image-5.jpeg'
import shot6 from '../assets/thumb-1920-1278679.png'

const SHOTS = [shot1, shot2, shot3, shot4, shot5, shot6]

function GalleryPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <PageHero
        eyebrow="Gallery"
        title="Screenshots & Moments"
        description="A few captures from around the State of Calhoun — submitted by the community."
      />

      <section className="bg-black py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 sm:grid-cols-3">
          {SHOTS.map((src, i) => (
            <div key={src} className="aspect-square overflow-hidden rounded-2xl border border-white/10">
              <img
                src={src}
                alt={`Frontier Roleplay screenshot ${i + 1}`}
                className="h-full w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GalleryPage
