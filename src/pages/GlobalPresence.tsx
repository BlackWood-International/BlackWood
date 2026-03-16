import { motion, AnimatePresence } from 'motion/react';
import { Building, Crown, MapPin, Globe, Shield, Cpu, Anchor, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Button from '../components/Button';
import Hero from '../components/Hero';

// Apple-like spring transition for flawless, interruptible motion
const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1
} as const;

export default function GlobalPresence() {
  const hubs = [
    {
      id: "ny",
      city: "New York",
      region: "Amérique du Nord",
      role: "Siège Social & Hub Financier",
      description: "Le centre névralgique de BlackWood International Corp. Depuis nos tours de Manhattan, la direction exécutive orchestre les flux de capitaux mondiaux et supervise les opérations de Capital Investments avec une précision millimétrée.",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
      icon: Building
    },
    {
      id: "geneva",
      city: "Genève",
      region: "Europe",
      role: "Gouvernance & Royal Motors",
      description: "Le sanctuaire de la diplomatie privée et de la gestion de patrimoine souverain. Genève abrite également le siège européen de BlackWood Royal Motors, alliant discrétion bancaire suisse et ingénierie d'exception.",
      image: "https://images.unsplash.com/photo-1574904935745-7e40279f589d?q=80&w=1740&auto=format&fit=crop",
      icon: Shield
    },
    {
      id: "tokyo",
      city: "Tokyo",
      region: "Asie-Pacifique",
      role: "Technologies & R&D",
      description: "Le laboratoire d'avant-garde de BlackWood Technologies. C'est ici, au cœur de l'innovation asiatique, que nos ingénieurs développent l'intelligence artificielle propriétaire MINERVA et nos solutions de hardware quantique.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop",
      icon: Cpu
    },
    {
      id: "dubai",
      city: "Dubaï",
      region: "Moyen-Orient",
      role: "Logistique & Événementiel",
      description: "Point de convergence stratégique entre l'Orient et l'Occident. Dubaï sert de plaque tournante pour BlackWood Logistics et accueille les sommets exclusifs de BlackWood Events destinés à notre clientèle ultra-HNWI.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
      icon: Anchor
    },
    {
      id: "dublin",
      city: "Dublin",
      region: "Europe",
      role: "Optimisation Fiscale",
      description: "Le centre névralgique de nos opérations financières européennes. Dublin structure nos flux de capitaux transfrontaliers et assure une optimisation fiscale rigoureuse pour l'ensemble de nos filiales continentales.",
      image: "https://images.unsplash.com/photo-1576267108089-33bc7c3ed469?q=80&w=1548&auto=format&fit=crop",
      icon: Globe
    },
    {
      id: "ls",
      city: "Los Santos",
      region: "San Andreas",
      role: "Nouvelle Implantation",
      description: "Hub régional stratégique et siège de BlackWood San Andreas Holding. La filiale automobile opérera exclusivement en tant que concessionnaire multimarques de prestige.",
      image: "https://lossantosonline.com/los-santos-skyline.jpg",
      icon: Crown
    }
  ];

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const selectedHub = hubs.find(h => h.id === selectedId);

  // Ensure component is mounted before using portals or browser APIs
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedId]);

  if (!isMounted) return null;

  return (
    <div className="w-full text-black bg-white overflow-hidden">
      <Hero 
        subtitle="Réseau International"
        title={<>Une Empreinte <br className="hidden md:block" /><span className="italic text-black/50">Globale</span></>}
        description="BlackWood International Corp. transcende les frontières. Notre présence stratégique sur les cinq continents nous permet d'anticiper les dynamiques géopolitiques et de garantir une continuité opérationnelle absolue à nos partenaires souverains et institutionnels."
        background="light"
      />

      {/* Intro Statement */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8"
          >
            "La géographie n'est plus une limite, <br className="hidden md:block" />
            <span className="italic text-black/50">c'est un levier de puissance.</span>"
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-px bg-black/20 mx-auto"
          />
        </div>
      </section>

      {/* Hubs Bento Grid Layout */}
      <section className="pb-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[450px]">
            {hubs.map((hub, index) => {
              let spanClasses = "";
              if (index === 0) spanClasses = "md:col-span-2 md:row-span-2"; // NY
              else if (index === 1) spanClasses = "md:col-span-2 md:row-span-1"; // Geneva
              else if (index === 2) spanClasses = "md:col-span-1 md:row-span-1"; // Tokyo
              else if (index === 3) spanClasses = "md:col-span-1 md:row-span-1"; // Dubai
              else if (index === 4) spanClasses = "md:col-span-2 md:row-span-1"; // Dublin
              else if (index === 5) spanClasses = "md:col-span-2 md:row-span-1"; // Los Santos

              const isSelected = selectedId === hub.id;
              const isAnotherSelected = selectedId !== null && !isSelected;

              return (
                <motion.div 
                  key={hub.id}
                  layoutId={`card-${hub.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  animate={{
                    scale: isAnotherSelected ? 0.96 : 1,
                    opacity: isAnotherSelected ? 0.4 : 1,
                    filter: isAnotherSelected ? 'blur(8px)' : 'blur(0px)',
                  }}
                  transition={{ 
                    ...springTransition,
                    opacity: { duration: 0.4 },
                    filter: { duration: 0.4 }
                  }}
                  onClick={() => setSelectedId(hub.id)}
                  className={`relative overflow-hidden rounded-[2.5rem] group cursor-pointer bg-zinc-900 ${spanClasses}`}
                >
                  {/* Background Image */}
                  <motion.img 
                    layoutId={`image-${hub.id}`}
                    src={hub.image} 
                    alt={hub.city} 
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    transition={springTransition}
                  />
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500" />

                  {/* Top Badge */}
                  <motion.div layoutId={`badge-${hub.id}`} className="absolute top-8 left-8 z-20" transition={springTransition}>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-white" />
                      <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-white">{hub.region}</span>
                    </div>
                  </motion.div>

                  {/* Content (Bottom) */}
                  <motion.div layoutId={`header-${hub.id}`} className="absolute bottom-8 left-8 right-8 flex items-center gap-5 z-20" transition={springTransition}>
                    <motion.div layoutId={`icon-${hub.id}`} className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl shrink-0 group-hover:bg-white/20 transition-colors duration-500" transition={springTransition}>
                      <hub.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.div layoutId={`title-${hub.id}`} transition={springTransition}>
                      <h3 className="text-3xl lg:text-4xl font-serif text-white">{hub.city}</h3>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/60 font-bold mt-1">
                        {hub.role}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* San Andreas Expansion Section */}
      <div id="san-andreas" className="bg-zinc-50 py-32 border-y border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Crown className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-600 uppercase font-bold">
                  Nouvelle Implantation Stratégique
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black mb-10 leading-tight">
                L'État Indépendant de <br />
                <span className="italic text-black/50">San Andreas</span>
              </h2>
              <div className="space-y-8 text-lg text-black/60 font-light leading-relaxed mb-12">
                <p>
                  L'architecture internationale du groupe s'articule autour de Holdings régionales. Si l'ensemble des sièges sociaux (entités mères) de nos filiales demeurent basés aux États-Unis, nos opérations internationales sont pilotées localement.
                </p>
                <p>
                  Dans ce cadre, BlackWood International Corp. est fier d'annoncer son implantation au sein de l'État de San Andreas. Récemment devenu indépendant et érigé en monarchie, ce territoire représente un carrefour économique d'une importance capitale.
                </p>
                <p>
                  Notre présence y est structurée autour de <strong className="text-black font-medium">BlackWood San Andreas Holding</strong>, qui possède et supervise notamment <strong className="text-black font-medium">BlackWood Royal Motors SA</strong> ainsi que nos autres filiales régionales. Dans ce contexte unique, la filiale automobile opérera exclusivement en tant que concessionnaire multimarques de prestige.
                </p>
                <p className="text-sm text-black/40 italic border-l border-black/20 pl-6 py-2">
                  Note : Les modèles exclusifs conçus et manufacturés par BlackWood Royal Motors ne seront pas importés sur ce territoire, préservant ainsi leur rareté absolue sur nos marchés historiques.
                </p>
              </div>
              
              <Button 
                label="Visiter BlackWood Royal Motors" 
                href="https://blackwood-international.github.io/BlackWood-Royal-Motors/" 
                target="_blank" 
                variant="primary" 
                showArrow 
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-black/10 group">
                <img 
                  src="https://lossantosonline.com/los-santos-skyline.jpg" 
                  alt="Skyline de Los Santos, San Andreas" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                <div className="absolute bottom-10 left-10">
                  <div className="bg-white/90 backdrop-blur-xl border border-black/10 rounded-3xl p-8 shadow-2xl">
                    <Building className="h-8 w-8 text-black mb-6" />
                    <h4 className="text-black font-serif text-3xl mb-2">San Andreas</h4>
                    <p className="text-black/50 text-[10px] font-mono tracking-widest uppercase font-bold">Vue de la métropole</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Apple-level Shared Layout Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedId && selectedHub && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              />
              <motion.div
                layoutId={`card-${selectedHub.id}`}
                className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row h-[85vh] md:h-[70vh]"
                transition={springTransition}
              >
                {/* Left: Image */}
                <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden shrink-0">
                  <motion.img
                    layoutId={`image-${selectedHub.id}`}
                    src={selectedHub.image}
                    className="absolute inset-0 w-full h-full object-cover"
                    transition={springTransition}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                  
                  <motion.div layoutId={`badge-${selectedHub.id}`} className="absolute top-8 left-8 z-20" transition={springTransition}>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-white" />
                      <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-white">{selectedHub.region}</span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right: Content */}
                <div className="relative w-full md:w-1/2 p-8 md:p-12 flex flex-col bg-white overflow-y-auto custom-scrollbar">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition-colors z-20"
                  >
                    <X className="w-5 h-5 text-black" />
                  </motion.button>

                  <motion.div layoutId={`header-${selectedHub.id}`} className="flex items-center gap-5 mb-10 mt-2 md:mt-0" transition={springTransition}>
                    <motion.div layoutId={`icon-${selectedHub.id}`} className="w-14 h-14 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center shadow-sm shrink-0" transition={springTransition}>
                      <selectedHub.icon className="w-6 h-6 text-black" />
                    </motion.div>
                    <motion.div layoutId={`title-${selectedHub.id}`} transition={springTransition}>
                      <h3 className="text-3xl lg:text-4xl font-serif text-black">{selectedHub.city}</h3>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-black/40 font-bold mt-1">
                        {selectedHub.role}
                      </p>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    exit={{ opacity: 0, filter: 'blur(8px)', y: 10, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="prose prose-lg"
                  >
                    <p className="text-black/60 font-light leading-relaxed">
                      {selectedHub.description}
                    </p>
                    
                    <div className="mt-12 pt-8 border-t border-black/10">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-black/40 mb-6 font-bold">Infrastructures & Capacités</h4>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-3xl font-serif text-black mb-1">Tier 1</p>
                          <p className="text-[10px] font-mono uppercase text-black/40 font-bold">Niveau de Sécurité</p>
                        </div>
                        <div>
                          <p className="text-3xl font-serif text-black mb-1">24/7</p>
                          <p className="text-[10px] font-mono uppercase text-black/40 font-bold">Continuité Opérationnelle</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
