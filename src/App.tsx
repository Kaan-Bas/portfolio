import { Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components/Layout'
import { RouteEffects } from './components/RouteEffects'
import Home from './pages/Home'
import Siemens from './pages/Siemens'
import ProjectPage from './pages/ProjectPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Ga naar de inhoud
      </a>
      <RouteEffects />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/siemens" element={<Siemens />} />
        <Route path="/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}
