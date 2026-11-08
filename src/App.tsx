import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceCards from './components/ServiceCards'
import FeatureCards from './components/FeatureCards'
import StatsBar from './components/StatsBar'
import ContactSection from './components/ContactSection'
import ChatWidget from './components/ChatWidget'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'

function AppContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-radial-glow text-ink-primary">
      <Navbar />
      <main className="flex flex-col gap-10 pt-6">
        <Hero />
        <ServiceCards />
        <FeatureCards />
        <StatsBar />
        <ContactSection />
      </main>
      <footer className="border-t border-white/5 px-6 py-6 text-center text-xs text-ink-secondary lg:px-14">
        © {new Date().getFullYear()} {t.footer}
      </footer>
      <ChatWidget />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
