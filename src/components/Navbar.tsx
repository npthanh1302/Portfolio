import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-lg">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-extrabold text-primary tracking-tighter font-plus-jakarta"
        >
          Aria V.
        </motion.div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center font-plus-jakarta text-sm font-semibold tracking-tight">
          <a className="text-primary border-b-2 border-primary pb-1 transition-all duration-200" href="#projects">Projects</a>
          <a className="text-on-surface-variant hover:text-primary transition-all duration-200" href="#experience">Experience</a>
          <a className="text-on-surface-variant hover:text-primary transition-all duration-200" href="#contact">Contact</a>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-semibold text-sm shadow-lg shadow-primary/20"
        >
          Get in Touch
        </motion.button>
      </nav>
    </header>
  );
}
