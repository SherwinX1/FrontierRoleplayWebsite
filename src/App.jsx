import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import LandingPage from './webpages/LandingPage'
import RulesPage from './webpages/RulesPage'
import GalleryPage from './webpages/GalleryPage'
import WikiPage from './webpages/WikiPage'
import SupportPage from './webpages/SupportPage'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/wiki" element={<WikiPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
