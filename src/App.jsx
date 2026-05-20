import Header from './components/Header';
import Hero from './sections/Hero';
import Hub from './sections/Hub';
import Journey from './sections/Journey';
import Testimonials from './sections/Testimonials';
import FinalSection from './sections/FinalSection';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Hub />
      <Journey />
      <Testimonials />
      <FinalSection />
    </div>
  )
}