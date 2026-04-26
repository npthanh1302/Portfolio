import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  School, 
  Download, 
  X, 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  ChevronRight,
  Github
} from 'lucide-react';

// --- Types ---
interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  fullReport?: string;
  objective: string | React.ReactNode;
  insights: { title: string; text: string; icon: React.ReactNode }[];
  recommendations: { title: string; points: { label: string; text: string }[] }[];
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 'credit-default',
    title: 'Credit Quality & Customer Risk Profiling',
    subtitle: '',
    description: 'Conducted rigorous EDA and data cleaning in Python to build a robust machine learning model for predicting customer default risks. Architected a scalable database and engineered interactive Power BI dashboards, allowing stakeholders to immediately identify and mitigate high-risk portfolios.',
    image: '/Report-Risk-Overview.png',
    tags: ['Python', 'Power BI', 'SQL'],
    objective: (
      <div className="space-y-4">
        <p>The primary mission of the report is to optimize lending decisions by expanding credit access for reliable borrowers while filtering out high-risk profiles. This is achieved through three strategic focuses:</p>
        <ul className="space-y-2 list-disc pl-5 opacity-90">
          <li><strong>Risk Identification:</strong> Identifying specific borrower profiles and behaviors that lead to default.</li>
          <li><strong>Capital Preservation:</strong> Mitigating financial losses by classifying and highlighting high-risk segments.</li>
          <li><strong>Policy Balancing:</strong> Refining lending thresholds and adjusting interest rate policies to ensure long-term profitability and safety.</li>
        </ul>
      </div>
    ),
    insights: [
      {
        title: 'Overall Portfolio Quality',
        text: 'The portfolio has a volume-based Default Rate of 21.5% and a value-based Non-Performing Loan (NPL) Ratio of 24.6%. Market performance and default rates are uniform across the USA, UK, and Canada, indicating risk is driven by financial profiles rather than geography.',
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        title: 'Risk Segmentation',
        text: 'Grade A and Venture loans represent the lowest risk "Safety Zone". Conversely, the "Extreme Risk Zone" is found in lower grades (D-G), with Medical and Debt Consolidation loans in these tiers suffering near-total loss rates of 90%-100%.',
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        title: 'High-Risk Personas',
        text: 'Gen Z and Young Adults (ages 20-30) make up about 76% of the portfolio but are the largest source of financial loss. Specifically, borrowers under 30 with incomes below $80k account for approximately 65% of the portfolio\'s total bad debt. Additionally, having a prior delinquency record doubles the default rate to 37.6%.',
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        title: 'The Leverage Trap',
        text: 'Interest rates above 15% drive default rates up to 57.9%. When an interest rate over 15% is combined with a Debt-to-Income (DTI) ratio greater than 50%, the NPL ratio spikes to 78.8%, proving that high interest rates cannot compensate for extreme financial leverage.',
        icon: <TrendingUp className="w-5 h-5" />
      }
    ],
    recommendations: [
      {
        title: 'Underwriting Policy Adjustments',
        points: [
          { label: 'AI-Driven Screening', text: 'Integrate XGBoost models for real-time forecasting; auto-flagging High-Risk Grades (D-G) and risky loan purposes: Debtconsodilation & Medical.' },
          { label: 'Strict DTI Control', text: 'Cap interest rates at 15% for borrowers with DTI > 50% to mitigate the proven 78.8% NPL risk in this segment.' },
          { label: 'Collateral Mandate', text: 'Require high-liquidity collateral for prior delinquencies and limit loan amounts for risk grades and risky loan purposes.' }
        ]
      },
      {
        title: 'Targeting Strategy',
        points: [
          { label: 'Safe Zone Expansion', text: 'Prioritize Grade A/B and stable sectors (Venture/Education) for portfolio growth.' },
          { label: 'Newbie Policy', text: 'Implement lower initial limits for young renters/new employees to monitor behavior before increasing exposure.' }
        ]
      },
      {
        title: 'Early Warning System (EWS)',
        points: [
          { label: 'Automated Red-Flags', text: 'Deploy alerts for high-risk profiles (Gen Z + Low Income + Renting + DTI > 70%) for mandatory manual review.' },
          { label: 'Risk-Based Pricing', text: 'Maintain interest rates below the 15% "Breaking Point" to ensure solvency and boost customer retention.' }
        ]
      }
    ]
  }
];

const SKILLS = [
  { name: 'Power BI', level: 95 },
  { name: 'SQL', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'Tableau', level: 70 },
  { name: 'Machine Learning', level: 60 },
];

const CERTIFICATES = [
  {
    name: 'Microsoft Certified: Data Analyst Associate',
    id: 'PL-300',
    image: '/PL-300.png',
    certImage: '/PL-300-Cert.png',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/bihngyn-6976/credentials/df3c52b977051c26'
  },
  {
    name: 'Google Advanced Data Analytics',
    id: 'Professional Certificate',
    image: '/Advanced-Analyst.png',
    certImage: '/GoogleAdvanced-Cert.png',
    verifyUrl: 'https://www.credly.com/badges/267f5da2-4a32-43b5-ad32-0040f6712e70/public_url'
  },
  {
    name: 'Google Business Intelligence',
    id: 'Professional Certificate',
    image: '/BI.png',
    certImage: '/BI-Cert.jpg',
    verifyUrl: 'https://www.credly.com/badges/aa0064cb-48cd-4ea5-9a84-d87eb01d1ab2/public_url'
  }
];

const CertModal = ({ cert, onClose }: { cert: typeof CERTIFICATES[0]; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-on-surface/60 backdrop-blur-xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-surface rounded-[3rem] shadow-[0_32px_100px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col"
      >
        <div className="bg-surface-low px-10 py-6 border-b border-surface-highest/20 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <CheckCircle2 size={28} />
            </div>
            <div>
              <h3 className="font-black text-xl text-on-surface tracking-tight">{cert.name}</h3>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] opacity-60">{cert.id}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-surface-highest/10 rounded-full transition-colors text-on-surface-variant">
            <X size={28} />
          </button>
        </div>
        
        <div className="flex-1 bg-surface-lowest p-6 md:p-10 overflow-y-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-surface-highest/20 bg-white">
                <img 
                  src={cert.certImage} 
                  alt={`${cert.name} Certificate`} 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="lg:col-span-1 flex flex-col items-center lg:items-start gap-8">
              <div className="text-center lg:text-left space-y-4">
                <p className="text-sm font-bold text-on-surface-variant opacity-70">Official Verification</p>
                <p className="text-xs text-on-surface-variant opacity-50">This credentials link leads to the issuing organization's official verification portal.</p>
              </div>
              <a 
                href={cert.verifyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center gap-3 bg-primary text-on-primary px-8 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all text-center"
              >
                Live Verify <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Components ---

const Navbar = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <nav className="sticky top-0 w-full z-40 bg-surface/90 backdrop-blur-xl transition-all duration-300 border-b border-surface-highest/10">
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-7xl mx-auto">
        <div className="text-xl font-extrabold tracking-tighter text-on-surface"></div>
        <div className="hidden md:flex gap-8 font-medium">
          {['Intro', 'Experience', 'Projects', 'Skills', 'Education'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-on-surface/80 hover:text-primary transition-colors duration-300"
            >
              {item === 'Education' ? 'Education & Credentials' : item}
            </a>
          ))}
        </div>
        <button 
          onClick={onContactClick}
          className="bg-primary text-on-primary px-6 py-2 rounded-md font-medium text-md hover:opacity-90 transition-opacity active:scale-95"
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'summary'>('dashboard');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-on-surface/40 backdrop-blur-md"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-[95vw] max-w-[1400px] h-[95vh] bg-surface rounded-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        <div className="bg-surface-low p-4 md:p-6 border-b border-surface-highest shrink-0">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-on-surface tracking-tight mb-1">{project.title}</h2>
              <p className="text-sm md:text-base text-on-surface-variant font-medium">{project.subtitle}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-surface-container rounded-full transition-colors text-on-surface-variant">
              <X size={20} />
            </button>
          </div>
          <div className="flex gap-8 mt-4">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`pb-4 transition-all ${activeTab === 'dashboard' ? 'border-b-2 border-primary text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface font-medium'}`}
            >
              Live Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('summary')}
              className={`pb-4 transition-all ${activeTab === 'summary' ? 'border-b-2 border-primary text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface font-medium'}`}
            >
              Executive Summary
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {activeTab === 'summary' ? (
            <div className="flex flex-col lg:flex-row gap-12">
              <article className="flex-1 space-y-16">
                {/* Section: Objective */}
                <section className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <h3 className="text-2xl font-black tracking-tight text-on-surface">Objective</h3>
                  </div>
                  <div className="bg-surface-low p-10 rounded-[2.5rem] border border-surface-highest/20 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-colors" />
                    <div className="text-on-surface leading-relaxed text-lg font-medium opacity-90 relative z-10">
                      {project.objective}
                    </div>
                  </div>
                </section>

                {/* Section: Key Insights */}
                <section className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <h3 className="text-2xl font-black tracking-tight text-on-surface">Key Insights</h3>
                  </div>
                  <div className="grid gap-6">
                    {project.insights.map((insight, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-surface-highest/20 shadow-xl shadow-surface-highest/5 flex gap-8 items-start group hover:border-primary/30 transition-all">
                        <div className="bg-primary/5 p-5 rounded-3xl text-primary h-fit group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-lg shadow-primary/5">
                          {insight.icon}
                        </div>
                        <div className="space-y-3">
                          <h4 className="font-black text-xl text-on-surface tracking-tight">{insight.title}</h4>
                          <p className="text-on-surface-variant text-base leading-relaxed font-medium opacity-80">{insight.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section: Strategic Recommendations */}
                <section className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <h3 className="text-2xl font-black tracking-tight text-on-surface">Strategic Recommendations</h3>
                  </div>
                  <div className="bg-surface-low p-10 rounded-[3rem] border border-surface-highest/20 space-y-12 shadow-inner">
                    {project.recommendations.map((outer, i) => (
                      <div key={i} className="space-y-8">
                        <div className="flex items-center gap-4">
                          <span className="text-5xl font-black text-primary/10 italic leading-none">{String(i + 1).padStart(2, '0')}</span>
                          <h4 className="text-2xl font-black text-on-surface tracking-tighter">{outer.title}</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 pl-4 border-l-2 border-surface-highest/40">
                          {outer.points.map((inner, j) => (
                            <div key={j} className="space-y-2 group">
                              <h5 className="text-primary font-black uppercase text-xs tracking-widest flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                                {inner.label}
                              </h5>
                              <p className="text-on-surface-variant text-sm font-medium leading-relaxed opacity-90 pl-3.5">{inner.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </article>

              <aside className="lg:w-80 shrink-0 space-y-8 lg:sticky lg:top-0 h-fit">
                <div className="bg-surface-high p-8 rounded-2xl text-center shadow-sm">
                  <div className="w-16 h-16 bg-primary-container/20 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <Download size={32} />
                  </div>
                  <h4 className="font-bold text-on-surface mb-2 text-lg">Executive Data Summary</h4>
                  <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Access the complete risk methodology, including detailed scorecard metrics (Gini, IV, KS), data cleaning procedures, and strategic recommendations for portfolio optimization.</p>
                  <a 
                    href="/hongyen3011_Summary.pdf"
                    download="hongyen3011_Summary.pdf"
                    className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold text-base hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/10"
                  >
                    <Download size={20} /> Download PDF
                  </a>
                </div>

                <div className="bg-surface-container p-6 rounded-2xl">
                  <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          ) : (
            <div className="w-full h-full bg-surface-low rounded-xl overflow-hidden shadow-inner border border-surface-highest/10">
              <iframe 
                title="Credit_Risk" 
                className="w-full h-full"
                src="https://app.powerbi.com/view?r=eyJrIjoiNjFmZDRjMzgtZWI5Yy00MzIzLTg5N2ItYWNiZWJhNDlmZDQ1IiwidCI6IjE4N2RhZjQwLWU4MTMtNDY3Yi04ZTVhLWE4MDQ2NWI0OTNkOCJ9" 
                frameBorder="0" 
                allowFullScreen={true}
              />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const ContactModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-on-surface/30 backdrop-blur-xl transition-all"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-surface-highest/20"
      >
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-surface-low rounded-full transition-colors text-on-surface-variant z-10">
          <X size={20} />
        </button>
        <div className="bg-surface-low px-8 pt-12 pb-8 text-center">
          <h2 className="text-4xl font-headline font-black text-on-surface tracking-tighter mb-3">Get in Touch</h2>
          <p className="text-base text-on-surface-variant opacity-80 leading-relaxed max-w-[250px] mx-auto font-medium">Let's discuss how we can collaborate on your next data narrative.</p>
        </div>
        <div className="px-8 py-8 space-y-4">
          <a href="tel:0966417719" className="flex items-center p-5 rounded-2xl bg-surface-low/50 hover:bg-surface-low transition-all group">
            <div className="w-14 h-14 bg-primary-container/20 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <div className="ml-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-1 opacity-60">Phone</p>
              <p className="text-lg font-black text-on-surface italic">0966-417-719</p>
            </div>
          </a>
          <a href="mailto:buihongyen30112000@gmail.com" className="flex items-center p-5 rounded-2xl bg-surface-low/50 hover:bg-surface-low transition-all group">
            <div className="w-14 h-14 bg-primary-container/20 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <div className="ml-5 min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-1 opacity-60">Email</p>
              <p className="text-lg font-black text-on-surface italic truncate">buihongyen30112000@gmail.com</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/yenbui3011" target="_blank" rel="noreferrer" className="flex items-center p-5 rounded-2xl bg-surface-low/50 hover:bg-surface-low transition-all group">
            <div className="w-14 h-14 bg-primary-container/20 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Linkedin size={24} />
            </div>
            <div className="ml-5 truncate flex-1 min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-1 opacity-60">LinkedIn</p>
              <p className="text-lg font-black text-on-surface italic truncate">linkedin.com/in/yenbui3011</p>
            </div>
          </a>
          <div className="flex items-center p-5 rounded-2xl bg-surface-highest/20">
            <div className="w-14 h-14 bg-surface-container rounded-full flex items-center justify-center text-on-surface-variant/70">
              <MapPin size={24} />
            </div>
            <div className="ml-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-1 opacity-60">Location</p>
              <p className="text-lg font-black text-on-surface italic">Tan Binh, HCMC</p>
            </div>
          </div>
        </div>
        <div className="h-2.5 w-full bg-gradient-to-r from-primary to-primary-container" />
      </motion.div>
    </div>
  );
};


export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES[0] | null>(null);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    // Preload certificate images
    const imagesToPreload = [
      ...CERTIFICATES.map(c => c.image),
      ...CERTIFICATES.map(c => c.certImage),
      ...PROJECTS.map(p => p.image),
      '/portrait.jpg',
      '/Logo_UEH_xanh.png'
    ];

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20 selection:text-primary">
      <Navbar onContactClick={() => setShowContact(true)} />

      {/* Hero Section */}
      <section id="intro" className="max-w-7xl mx-auto px-6 py-24 min-h-[90vh] flex items-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -mr-40 -mt-40 pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="inline-flex items-center gap-3 bg-secondary-fixed text-on-secondary-fixed px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] shadow-sm">
              <div className="w-2 h-2 rounded-full bg-on-secondary-fixed animate-pulse" />
              Banking & Financial data specialist
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-[-0.05em] leading-[0.85] text-on-surface">
              Hi, I'm <br />
              <span className="text-primary mt-4 block">Yen Bui Hong</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-sans opacity-95">
              I translate complex data sets into compelling, human-centric narratives. Bridging the gap between raw numbers and strategic business decisions.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
             <div className="absolute -inset-10 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 rounded-full blur-[100px]" />
            <div className="relative aspect-[10/12] max-w-md mx-auto rounded-[4rem] overflow-hidden shadow-[0_32px_100px_rgba(202,97,128,0.1)] group">
              <img 
                src="/portrait.jpg" 
                alt="Yen Bui Hong Professional Portrait"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 mask-image-radial"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-surface-low pt-20 pb-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Professional Journey</h2>
            <p className="text-2xl text-on-surface-variant font-bold text-primary max-w-3xl mx-auto italic opacity-70">Joint Stock Commercial Bank for Foreign Trade of VietNam (Vietcombank)</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-surface-highest/30 -translate-x-1/2 rounded-full" />
            
            <div className="space-y-16">
              {/* Experience Item 1 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="w-full md:w-7/12 ml-14 md:ml-0 md:text-right md:pr-6 order-2 md:order-1">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h3 className="text-3xl font-black tracking-tight group-hover:text-primary transition-colors">Credit Retail Analyst</h3>
                    <p className="text-primary font-black uppercase text-sm tracking-widest">Vietcombank</p>
                    <div className="space-y-5 text-base text-on-surface-variant leading-relaxed font-medium">
                      <p><strong className="text-on-surface">Credit Appraisal:</strong> Conducted in-depth financial analysis to assess borrower creditworthiness and loan viability.</p>
                      <p><strong className="text-on-surface">Process Compliance:</strong> Performed credit assessments in strict accordance with bank policies and regulations.</p>
                      <p><strong className="text-on-surface">Risk Mitigation:</strong> Identified potential risks to maintain a healthy portfolio and keep NPL ratios within safe limits.</p>
                      <p><strong className="text-on-surface">Portfolio Monitoring:</strong> Tracked post-disbursement performance to detect early warning signs and ensure asset quality.</p>
                      <p><strong className="text-on-surface">Reporting:</strong> Prepared comprehensive risk assessment reports to support informed credit decision-making.</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2 md:justify-end">
                      {['Credit Analysis', 'Risk Management', 'Compliance', 'Reporting'].map(t => (
                        <span key={t} className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-[12px] ring-surface-low z-10 transition-transform duration-500 group-hover:scale-125" />
                
                <div className="w-full md:w-7/12 ml-14 md:ml-0 md:pl-6 mb-8 md:mb-0 order-1 md:order-2">
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-surface-highest/10 inline-block transform transition-transform group-hover:translate-x-2">
                    <p className="text-xl font-black italic text-on-surface tracking-tight mb-1">4/2024 - 6/2025</p>
                    <p className="text-sm font-bold text-on-surface-variant opacity-60 flex items-center gap-2">
                      <MapPin size={14} className="text-primary" /> Ho Chi Minh City, Vietnam
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="w-full md:w-7/12 ml-14 md:ml-0 md:pr-6 mb-8 md:mb-0 order-1">
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-surface-highest/10 inline-block md:float-right transform transition-transform group-hover:-translate-x-2">
                    <p className="text-xl font-black italic text-on-surface tracking-tight mb-1">7/2022 - 3/2024</p>
                    <p className="text-sm font-bold text-on-surface-variant opacity-60 flex items-center gap-2">
                      <MapPin size={14} className="text-primary" /> Ho Chi Minh City, Vietnam
                    </p>
                  </div>
                </div>

                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary ring-[12px] ring-surface-low z-10 transition-transform duration-500 group-hover:scale-125" />

                <div className="w-full md:w-7/12 ml-14 md:ml-0 md:pl-6 order-2">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h3 className="text-3xl font-black tracking-tight group-hover:text-primary transition-colors">Customer Relationship Management Specialist</h3>
                    <p className="text-primary font-black uppercase text-sm tracking-widest">Vietcombank</p>
                    <div className="space-y-5 text-base text-on-surface-variant leading-relaxed font-medium">
                      <p><strong className="text-on-surface">Customer Acquisition:</strong> Proactively identified and acquired new loan customers through networking and market outreach.</p>
                      <p><strong className="text-on-surface">Loan Management:</strong> Collected and analyzed financial documents to prepare high-quality loan application dossiers for approval.</p>
                      <p><strong className="text-on-surface">Relationship Management:</strong> Developed and maintained strong connections with the retail customer base to ensure long-term retention.</p>
                      <p><strong className="text-on-surface">Post-Loan Monitoring:</strong> Managed customer portfolios after disbursement, providing proactive support and timely financial consultations.</p>
                      <p><strong className="text-on-surface">Strategic Sales & Cross-selling:</strong> Analyzed customer profiles to deliver tailored products (insurance, cards, digital banking), maximizing cross-selling efficiency.</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {['Customer Acquisition', 'Credit Analysis', 'CRM', 'Strategic Sales'].map(t => (
                        <span key={t} className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-8">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Projects</h2>
          <p className="text-xl text-on-surface-variant font-medium leading-relaxed opacity-80 italic">Case studies demonstrating the translation of raw data into actionable business strategy.</p>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:items-center`}
            >
              <div className="lg:w-[45%] group perspective-1000">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:rotate-y-12">
                   <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </div>
              <div className="lg:w-[55%] space-y-10">
                <div className="flex items-center gap-3 text-primary font-black text-sm uppercase tracking-[0.3em]">
                  <TrendingUp size={18} /> Featured Project
                </div>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] text-on-surface">{project.title}</h3>
                <p className="text-xl text-on-surface-variant leading-relaxed font-medium opacity-90">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-secondary-fixed text-on-secondary-fixed px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="group inline-flex items-center gap-4 bg-primary text-on-primary px-10 py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-95 shadow-xl shadow-primary/10"
                >
                  Explore Now <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-surface-highest py-20 px-6 relative overflow-hidden">
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px] -ml-40 -mb-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-32 text-center">Technical Toolkit</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-7 space-y-12">
              <h3 className="text-4xl font-black italic tracking-tight italic">The Analytical Approach</h3>
              <p className="text-2xl text-on-surface-variant font-medium leading-relaxed italic opacity-80 -mt-4">Tools are just instruments; the true skill lies in knowing which questions to ask.</p>
              <div className="space-y-10">
                {[
                  { title: 'Data Storytelling & Visualization', text: 'Visualizing insights for decision-making. Creating interactive dashboards using Power BI, while leveraging Seaborn and Matplotlib to translate data into clear, actionable insights.' },
                  { title: 'Analytical Logic & Processing', text: 'Streamlining end-to-end data pipelines. Executing EDA, Data Cleaning, and ETL with MySQL and Power Query, while applying Machine Learning (Scikit-learn) to build robust predictive models.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-6 group">
                    <div className="p-4 bg-white rounded-3xl shadow-xl text-primary group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={32} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-black text-2xl text-on-surface">{item.title}</h4>
                      <p className="text-lg text-on-surface-variant font-medium leading-relaxed opacity-70">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-12 rounded-[3.5rem] shadow-[0_40px_100px_rgba(28,28,19,0.06)] border border-surface-highest space-y-10">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="font-black text-sm uppercase tracking-[0.2em] opacity-60">{skill.name}</span>
                    <span className="text-primary text-2xl font-black italic tracking-tighter">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-surface-low rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "anticipate" }}
                      className="h-full bg-gradient-to-r from-primary to-primary-container"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-32 space-y-6">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter">Credentials</h2>
          <p className="text-2xl text-on-surface-variant italic font-medium opacity-60">Continuous learning is the foundation of effective analysis.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-12 xl:col-span-5 bg-surface-low p-16 rounded-[4rem] border border-surface-highest flex flex-col justify-center relative overflow-hidden shadow-sm"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full blur-[100px] -mr-20 -mt-20" />
            <div className="flex flex-col gap-12 items-center text-center relative z-10">
              <div className="w-64 h-64 bg-white rounded-[4rem] flex items-center justify-center p-12 shadow-2xl shadow-primary/5 transition-transform group-hover:scale-105">
                <img src="/Logo_UEH_xanh.png" alt="University of Economics Ho Chi Minh City Logo" className="w-full h-full object-contain" />
              </div>
              <div className="space-y-6">
                <h3 className="text-5xl md:text-4xl font-black tracking-tight italic leading-tight">University of Economics <br />Ho Chi Minh City (UEH)</h3>
                <p className="text-2xl font-bold text-on-surface-variant opacity-80">International Finance</p>
                <div className="inline-block mt-8 text-[14px] font-black uppercase tracking-[0.4em] text-primary px-6 py-3 bg-primary/10 rounded-full">Bachelor's Degree</div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {CERTIFICATES.map((cert) => (
              <motion.div 
                key={cert.name}
                onClick={() => setSelectedCert(cert)}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-[3rem] border border-surface-highest/20 flex flex-col justify-between shadow-xl shadow-surface-highest/10 hover:shadow-primary/5 transition-all group cursor-pointer"
              >
                <div className="flex flex-col gap-8 items-center text-center">
                  <div className="w-48 h-48 bg-surface-low rounded-[3rem] overflow-hidden shadow-inner p-8 transition-all duration-500">
                    <img src={cert.image} alt={cert.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-black text-2xl italic leading-tight text-on-surface group-hover:text-primary transition-colors">{cert.name}</h4>
                    <p className="text-sm font-black uppercase tracking-widest text-on-surface-variant opacity-60">{cert.id}</p>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary group-hover:gap-4 transition-all pr-4">
                    View & Verify <ChevronRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-low py-32 px-10 border-t border-surface-highest/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">   
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yenbui3011' },
              { label: 'GitHub', href: 'https://github.com/yen3011/Credit-Risk-Portfolio' },
            ].map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface/50 hover:text-primary transition-all font-black text-lg tracking-tight relative group overflow-hidden pb-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </div>

          <button 
            onClick={() => setShowContact(true)}
            className="bg-primary text-on-primary px-12 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
          >
            Start a Conversation
          </button>
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
        {selectedCert && (
          <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
        {showContact && (
          <ContactModal onClose={() => setShowContact(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
