import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:py-32 flex flex-col md:flex-row items-center gap-16 overflow-visible relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-8 z-10"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-secondary font-bold text-xs uppercase tracking-widest">
          Senior Data Analyst
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-on-surface font-plus-jakarta">
          Data Tells a Story. <br/>
          <span className="text-primary italic">Let's Make it a Masterpiece.</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed font-manrope">
          Merging the precision of data science with the vibrancy of visual storytelling to help brands unlock hidden growth opportunities.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-tertiary-container text-tertiary px-8 py-4 rounded-lg font-bold text-lg shadow-xl shadow-tertiary/10"
          >
            View Portfolio
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-surface-lowest text-primary px-8 py-4 rounded-lg font-bold text-lg border border-surface-high transition-all"
          >
            My Approach
          </motion.button>
        </div>
      </motion.div>

      <div className="relative flex-1 w-full max-w-md">
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container/30 rounded-full blur-3xl -z-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-lg overflow-hidden shadow-2xl"
        >
          <img 
            className="w-full aspect-[4/5] object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXCZob5LCvyriCL9aAh5gSHQxPH42f9JFtM1UgRNh_e_BWvZg7hgL3KIjqWgMDoKIZFUq59X79l2hPktBkyLaR4Q6A_TuU1pW4PPcSxS6LHwQWIK3MNNr5PiUkVa3pgoVziDZIvmjB6O-v8Jny2GStuOYQm3uWEIlkOaa4t7ZZjMgNtdmJph3GdRA5PES8XWpthHCag_5k5ZvMMOBP9WwB9i94nT56hxGWt7tJxVWRLNPskZ215G3mHv2YePILZ6DpvF3SvKi7se0"
            alt="Aria V."
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Floating Insight Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute -bottom-8 -left-8 bg-surface-lowest p-6 rounded-lg shadow-2xl border border-surface-high/50 max-w-[240px]"
        >
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-5 h-5 text-primary fill-current" />
            <span className="font-plus-jakarta font-bold text-sm">Latest Insight</span>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            "Consumer behavior shifted 12% toward eco-conscious options this quarter."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
