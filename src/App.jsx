import CaseStudies from "./components/CaseStudies"
import CTA from "./components/CTA"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import WorkingProcess from "./components/WorkingProcess"

function App() {

  return (
    <div className="font-primary">
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <CaseStudies />
      <WorkingProcess />
    </div>
  )
}

export default App
