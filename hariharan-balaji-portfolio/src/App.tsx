/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import BusinessAdvisory from './components/BusinessAdvisory';
import About from './components/About';
import Electives from './components/Electives';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CurrentProjects from './components/CurrentProjects';
import FitChecker from './components/FitChecker';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BusinessAdvisory />
        <div id="about">
          <About />
        </div>
        <Electives />
        <Skills />
        <Experience />
        <CurrentProjects />
        <Projects />
        <FitChecker />
      </main>
      <Footer />
    </div>
  );
}

