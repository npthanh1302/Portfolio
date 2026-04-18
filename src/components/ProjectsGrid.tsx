import { motion } from 'motion/react';
import { MousePointer2, Brain, Box, Map as MapIcon, TrendingUp, Bolt, DollarSign } from 'lucide-react';

export default function ProjectsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32" id="projects">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-plus-jakarta">
          Strategic Data Projects
        </h2>
        <div className="h-1.5 w-24 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Project 1: Large Card (Mint) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-8 bg-secondary-container rounded-lg p-10 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
        >
          <div className="z-10">
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 rounded-lg bg-surface-lowest/50 flex items-center justify-center">
                <MousePointer2 className="w-6 h-6 text-secondary" />
              </div>
              <div className="px-4 py-2 bg-surface-lowest/40 backdrop-blur rounded-full text-secondary font-bold text-sm">
                E-Commerce Growth
              </div>
            </div>
            <h3 className="text-3xl font-bold text-on-surface mb-4 font-plus-jakarta">Consumer Path Optimization</h3>
            <p className="text-on-surface-variant text-lg max-w-md mb-8 font-manrope">
              Analyzed over 2M sessions to identify drop-off points in the checkout funnel.
            </p>
            <div className="flex items-center gap-2 text-secondary font-extrabold text-2xl font-plus-jakarta">
              <TrendingUp className="w-8 h-8" />
              Boosted efficiency by 30%
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-2/3 transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100">
            <img 
              className="rounded-lg shadow-lg" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAV6scwBSQyAvo-1SDPNwOVfjp15AOsYcvjl1r4b_UPUaTki8Tekb0J3NTi2x-eyKssyBQFo41xhumWCjYJKQrlrju2fmumG_3X-sWpt7oYhfsugqqlTb87AdpewQ-IyMoFhrofqydL7VqLTOM202hsOakNIoivUqyK55j2JnaHDMrgwSG-BTNUt0rghysvZ0L1eqc2CX2F7rxLuJLVzOifXxkOuXR_6pmhSmTHqgXN1GW-ynf3l7r4ZfTM96-iPrNF88-lxgaxdw"
              alt="Data Viz"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Project 2: Small Card (Lavender) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 bg-primary-container rounded-lg p-10 group hover:shadow-2xl transition-all duration-500"
        >
          <div className="w-12 h-12 rounded-lg bg-surface-lowest/50 flex items-center justify-center mb-8">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-on-surface mb-4 font-plus-jakarta">Sentiment Analysis Engine</h3>
          <p className="text-on-surface-variant mb-6 font-manrope">Automated feedback loops for a global SaaS provider using NLP.</p>
          <div className="text-primary font-bold flex items-center gap-2 font-plus-jakarta uppercase tracking-wide text-sm">
            <Bolt className="w-5 h-5 fill-current" />
            92% Accuracy Rate
          </div>
        </motion.div>

        {/* Project 3: Small Card (Coral) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 bg-tertiary-container rounded-lg p-10 group hover:shadow-2xl transition-all duration-500"
        >
          <div className="w-12 h-12 rounded-lg bg-surface-lowest/50 flex items-center justify-center mb-8">
            <Box className="w-6 h-6 text-tertiary" />
          </div>
          <h3 className="text-2xl font-bold text-on-surface mb-4 font-plus-jakarta">Inventory Forecasting</h3>
          <p className="text-on-surface-variant mb-6 font-manrope">Supply chain model that reduced warehouse waste for retail chains.</p>
          <div className="text-tertiary font-bold flex items-center gap-2 font-plus-jakarta uppercase tracking-wide text-sm">
            <DollarSign className="w-5 h-5" />
            $1.2M Annual Savings
          </div>
        </motion.div>

        {/* Project 4: Large Card (Soft Yellow/Tonal) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-8 bg-surface-high rounded-lg p-10 flex flex-col md:flex-row gap-8 group hover:shadow-2xl transition-all duration-500"
        >
          <div className="flex-1">
            <div className="w-12 h-12 rounded-lg bg-surface-lowest/50 flex items-center justify-center mb-8">
              <MapIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4 font-plus-jakarta">Urban Mobility Mapping</h3>
            <p className="text-on-surface-variant text-lg mb-8 font-manrope">Collaborated with city planners to visualize traffic density and improve public transit routing.</p>
            <div className="flex gap-3">
              <span className="px-3 py-1 bg-surface-lowest rounded-full text-xs font-bold uppercase tracking-widest text-on-surface-variant">Tableau</span>
              <span className="px-3 py-1 bg-surface-lowest rounded-full text-xs font-bold uppercase tracking-widest text-on-surface-variant">Geospatial</span>
            </div>
          </div>
          <div className="flex-1 rounded-lg overflow-hidden h-48 md:h-auto">
            <img 
              className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzYUzvG39g0LTYn8z82gbx3XqG2aVblhKZWaoAtG81RFyDe2oshmlXpKqq1109ONmK-KHjunG32lcL7s14pDkaQsFMxcOOLNC2qpj7R2otiq_dByNJhrWoNP2MGaDhICeeRZRU1SIxt-trY3QXp45jKkLmvz1_9gx7mmegJbBNO9hT9ZOjPnr87tNe0LYToJJcJLAndlMdTy_9et4xx3F5JGwfs7bJA5lpFvUE2-kDKry8O4dXtpDmNzjQVtVwXfoNfLLMPQ58ygU"
              alt="City Map"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
