import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-4 md:gap-5 mb-8 group">
              <div className="flex flex-col">
                <span className="font-['Montserrat'] font-bold text-3xl md:text-5xl text-black leading-none tracking-[-0.08em]">BlackWood</span>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-black/50 font-medium mt-2">International Corp.</span>
              </div>
            </Link>
            <p className="text-black/50 text-[15px] leading-relaxed max-w-md font-light">
              BlackWood International Corp. est une institution financière et technologique mondiale de premier plan. Nous gérons des actifs stratégiques et façonnons l'avenir de l'économie globale avec rigueur, vision et excellence.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans text-[11px] font-semibold text-black uppercase tracking-[0.2em] mb-8">Le Groupe</h4>
            <ul className="space-y-5">
              <li><Link to="/gouvernance" className="text-[15px] text-black/50 hover:text-black transition-colors duration-300">Gouvernance</Link></li>
              <li><Link to="/presence-mondiale" className="text-[15px] text-black/50 hover:text-black transition-colors duration-300">Présence Mondiale</Link></li>
              <li><Link to="/actualites-boursieres" className="text-[15px] text-black/50 hover:text-black transition-colors duration-300">Actualités Boursières</Link></li>
              <li><Link to="/minerva" className="text-[15px] text-black/50 hover:text-black transition-colors duration-300">MINERVA</Link></li>
              <li><Link to="/divisions" className="text-[15px] text-black/50 hover:text-black transition-colors duration-300">Nos Divisions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[11px] font-semibold text-black uppercase tracking-[0.2em] mb-8">Investisseurs & Contact</h4>
            <ul className="space-y-5">
              <li><Link to="/contact" className="text-[15px] text-black/50 hover:text-black transition-colors duration-300">Contact</Link></li>
              <li><Link to="/legal" className="text-[15px] text-black/50 hover:text-black transition-colors duration-300">Mentions Légales</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-black/40">
            &copy; {new Date().getFullYear()} BlackWood International Corp. Tous droits réservés.
          </p>
          <p className="text-[11px] text-black/40 font-medium tracking-[0.2em] uppercase">
            Designed in <span className="text-black">New York</span>
          </p>
        </div>
      </div>
    </footer>
  );
}