import { motion } from 'motion/react';

export default function CtaSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-32">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary p-12 md:p-24 rounded-lg relative overflow-hidden text-center"
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:200%_200%] opacity-20 animate-pulse"></div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-on-primary mb-8 tracking-tighter font-plus-jakarta">
          Ready to transform your data into a masterpiece?
        </h2>
        <p className="text-on-primary/80 text-xl max-w-2xl mx-auto mb-12 font-manrope">
          I'm currently accepting new projects for Q4 2024. Let's build something brilliant together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-on-primary text-primary px-10 py-5 rounded-lg font-bold text-lg hover:shadow-xl transition-all font-plus-jakarta"
          >
            Book a Strategy Call
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-container/20 text-on-primary border border-on-primary/30 px-10 py-5 rounded-lg font-bold text-lg hover:bg-on-primary/10 transition-all font-plus-jakarta"
          >
            View Resume
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
