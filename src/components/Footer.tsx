export default function Footer() {
  return (
    <footer className="w-full bg-surface-low border-t border-surface-high/50">
      <div className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="text-lg font-bold text-primary font-plus-jakarta">Aria V.</div>
        <div className="font-manrope text-xs uppercase tracking-widest text-on-surface-variant text-center">
          © {new Date().getFullYear()} PRECISION IN BLOOM • SENIOR DATA ANALYST
        </div>
        <div className="flex gap-8">
          {['LinkedIn', 'GitHub', 'Dribbble'].map((platform) => (
            <a 
              key={platform}
              className="text-on-surface-variant hover:text-primary transition-colors font-manrope text-xs uppercase tracking-widest opacity-80 hover:opacity-100" 
              href="#"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
