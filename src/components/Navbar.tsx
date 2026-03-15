import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const links = [
    { name: 'Accueil', path: '/' },
    { 
      name: 'Nos Divisions', 
      path: '/divisions',
      isDropdown: true,
      items: [
        { name: "Vue d'ensemble", path: '/divisions' },
        { name: 'Capital Investments (SA)', path: '/divisions/bci' },
      ]
    },
    { 
      name: 'Le Groupe', 
      isDropdown: true,
      items: [
        { name: 'Gouvernance', path: '/gouvernance' },
        { name: 'Présence Mondiale', path: '/presence-mondiale' },
        { name: 'Actualités Boursières', path: '/actualites-boursieres' },
        { name: 'MINERVA', path: '/minerva' },
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
        <nav className={`pointer-events-auto transition-all duration-500 ease-out rounded-full ${
          scrolled || isOpen
            ? 'bg-white/80 backdrop-blur-2xl border border-black/10 shadow-2xl shadow-black/50 w-full max-w-5xl' 
            : 'bg-transparent border-transparent w-full max-w-7xl'
        }`}>
          <div className="px-6 md:px-8">
            <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-16' : 'h-20 md:h-24'}`}>
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="flex items-center gap-3 group z-50 relative" onClick={() => setIsOpen(false)}>
                  <div className="flex flex-col">
                    <span className="font-['Montserrat'] font-bold text-xl md:text-2xl leading-none tracking-[-0.08em] text-black">BlackWood</span>
                  </div>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                {links.map((link) => (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => link.isDropdown && setActiveDropdown(link.name)}
                    onMouseLeave={() => link.isDropdown && setActiveDropdown(null)}
                  >
                    {link.isDropdown ? (
                      <button
                        className={`flex items-center gap-1 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                          link.items?.some(item => location.pathname === item.path)
                            ? 'text-black'
                            : 'text-black/60 hover:text-black'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                    ) : (
                      <Link
                        to={link.path!}
                        className={`text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                          location.pathname === link.path
                            ? 'text-black'
                            : 'text-black/60 hover:text-black'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}

                    {/* Dropdown Menu */}
                    {link.isDropdown && (
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98, filter: 'blur(4px)' }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: 10, scale: 0.98, filter: 'blur(4px)' }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-56"
                          >
                            <div className="bg-white rounded-2xl shadow-2xl border border-black/10 overflow-hidden p-1.5">
                              {link.items?.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`block px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                                    location.pathname === item.path
                                      ? 'bg-black/5 text-black'
                                      : 'text-black/60 hover:bg-black/5 hover:text-black'
                                  }`}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
              <div className="md:hidden flex items-center gap-4">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative z-50 w-10 h-10 flex flex-col justify-center items-center"
                >
                  <motion.span 
                    animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-5 h-[1.5px] bg-black rounded-full"
                  />
                  <motion.span 
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-5 h-[1.5px] bg-black rounded-full"
                  />
                  <motion.span 
                    animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-5 h-[1.5px] bg-black rounded-full"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu - Premium Dark Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 z-40 bg-white/80 backdrop-blur-3xl text-black flex flex-col pt-32 pb-8 px-6 overflow-y-auto"
          >
            <div className="flex-1 flex flex-col space-y-8 relative z-10">
              {links.map((link, index) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 20, filter: "blur(10px)", transition: { duration: 0.2 } }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {link.isDropdown ? (
                    <div className="space-y-4">
                      <div className="text-[11px] font-mono tracking-widest text-black/40 uppercase font-bold">
                        {link.name}
                      </div>
                      <div className="flex flex-col space-y-4 pl-4 border-l border-black/10">
                        {link.items?.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`text-2xl font-serif tracking-tight transition-colors ${
                              location.pathname === item.path
                                ? 'text-black'
                                : 'text-black/60 active:text-black'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path!}
                      onClick={() => setIsOpen(false)}
                      className={`block text-4xl font-serif tracking-tight transition-colors ${
                        location.pathname === link.path
                          ? 'text-black'
                          : 'text-black/60 active:text-black'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 pt-8 border-t border-black/10 relative z-10"
            >
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between w-full p-5 bg-black text-white rounded-2xl active:scale-95 transition-all duration-300"
              >
                <span className="text-sm font-medium tracking-wide">Client Portal</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}