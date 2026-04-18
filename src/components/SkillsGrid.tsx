import { motion } from 'motion/react';
import { Terminal, Database, Cloud, BarChart3, Activity } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Terminal, color: 'primary' },
  { name: 'SQL', icon: Database, color: 'secondary' },
  { name: 'AWS', icon: Cloud, color: 'tertiary' },
  { name: 'Tableau', icon: BarChart3, color: 'primary' },
  { name: 'R Studio', icon: Activity, color: 'secondary' },
];

export default function SkillsGrid() {
  return (
    <section className="bg-surface-low py-24" id="experience">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <span className="font-plus-jakarta text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4 block">
              Capabilities
            </span>
            <h2 className="text-4xl font-bold tracking-tight font-plus-jakarta">
              The Technical Ecosystem
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-sm font-manrope">
            A full-stack analytical toolkit designed for speed, accuracy, and beautiful reporting.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-6 bg-surface-lowest rounded-lg flex items-center gap-4 shadow-sm border border-surface-high/20"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-${skill.color}-container text-${skill.color}`}>
                <skill.icon className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg font-plus-jakarta">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
