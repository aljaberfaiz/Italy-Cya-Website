import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Programme from '../components/Programme';
import TravelVenue from '../components/TravelVenue';
import Partners from '../components/Partners';
import InclusionSafety from '../components/InclusionSafety';
import Resources from '../components/Resources';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


function Index() {
  useEffect(() => {

    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programme />
        <TravelVenue />
        <Partners />
        <InclusionSafety />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Index;