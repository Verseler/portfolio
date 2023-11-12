import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';

function App() {

  return (
    <div className="bg-black font-primary">
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App;
