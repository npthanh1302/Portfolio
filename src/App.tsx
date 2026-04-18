/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsGrid from './components/SkillsGrid';
import ProjectsGrid from './components/ProjectsGrid';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 min-h-screen">
        <Hero />
        <SkillsGrid />
        <ProjectsGrid />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
