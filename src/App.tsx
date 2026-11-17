import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Expertise } from '@/components/Expertise';
import { Tools } from '@/components/Tools';
import { Portfolio } from '@/components/Portfolio';
import { Experience } from '@/components/Experience';
import { Certifications } from '@/components/Certifications';
import { Education } from '@/components/Education';
import { Awards } from '@/components/Awards';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-700">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white focus:text-sm"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Tools />
        <Portfolio />
        <Experience />
        <Certifications />
        <Education />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
