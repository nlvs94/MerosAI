import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceCards from './components/ServiceCards'
import FeatureCards from './components/FeatureCards'
import StatsBar from './components/StatsBar'

function App() {
  return (
    <div className="min-h-screen bg-radial-glow text-ink-primary">
      <Navbar />
      <main className="flex flex-col gap-10 pt-6">
        <Hero />
        <ServiceCards />
        <FeatureCards />
        <StatsBar />
      </main>
      <footer className="border-t border-white/5 px-6 py-6 text-center text-xs text-ink-secondary lg:px-14">
        © {new Date().getFullYear()} Meros AI. Barcha huquqlar himoyalangan.
      </footer>
    </div>
  )
}

export default App
