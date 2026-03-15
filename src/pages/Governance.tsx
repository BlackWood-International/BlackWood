import { motion } from 'motion/react';
import { Shield, Scale, BrainCircuit, Landmark, Lock, Eye, ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import Button from '../components/Button';

export default function Governance() {
  const boardMembers = [
    {
      name: "Victor Blackwood",
      role: "Chairman & Chief Executive Officer",
      expertise: "Gouvernance Globale, Stratégie Souveraine",
      description: "Architecte du Monolithe. Il détient le contrôle absolu des droits de vote via les actions de Classe B, garantissant une exécution stratégique sans interférence externe.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop"
    },
    {
      name: "Dr. Elena Rostova",
      role: "Chief AI Officer & Head of MINERVA",
      expertise: "Informatique Quantique, Modélisation Prédictive",
      description: "Ancienne directrice de recherche en physique quantique. Elle supervise l'évolution de l'algorithme MINERVA et son intégration dans toutes les divisions du groupe.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop"
    },
    {
      name: "Gen. Arthur Sterling (Ret.)",
      role: "Director, Defense & Dynamics",
      expertise: "Géopolitique, Logistique Militaire",
      description: "Fort de 35 ans d'expérience au plus haut niveau des forces armées, il dirige les opérations de sécurité globale et les contrats gouvernementaux de BlackWood.",
      image: "https://i.imgur.com/iIGutCS.jpeg"
    },
    {
      name: "Marcus Vance",
      role: "Chief Macroeconomist",
      expertise: "Politique Monétaire, Marchés Émergents",
      description: "Stratège financier de renommée mondiale. Il traduit les prédictions de MINERVA en allocations de capital massives pour BlackWood Capital Investments.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full min-h-screen">
      <Hero 
        subtitle="Structure du Pouvoir"
        title={<>Gouvernance <br className="hidden md:block" /><span className="text-black/20 font-light">Institutionnelle</span></>}
        description="BlackWood International Corp. n'est pas soumise aux caprices des marchés à court terme. Notre structure de gouvernance est conçue pour garantir une stabilité décisionnelle absolue et une exécution stratégique implacable."
        background="dark"
      />

      <div className="relative z-10 bg-white pb-40 pt-24">
        {/* The Doctrine Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-zinc-50 border border-black/10 rounded-[2rem] lg:rounded-[3rem] p-6 md:p-10 lg:p-16 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 -skew-x-12 translate-x-1/4 hidden lg:block"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">La Doctrine BlackWood</h2>
              <p className="text-base lg:text-lg text-black/60 font-light leading-relaxed mb-8">
                La suprématie de BlackWood repose sur une architecture capitalistique asymétrique. Les statuts de la corporation sanctuarisent le pouvoir exécutif, isolant la direction des pressions activistes et garantissant une vision souveraine à très long terme.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-8 h-8 rounded-full bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0">
                    <Scale className="h-4 w-4 text-black" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-widest text-black uppercase mb-1">Actions de Classe A</h4>
                    <p className="text-sm text-black/50 leading-relaxed">Cotées au NYSE (BLWD). Elles offrent aux investisseurs institutionnels et publics une participation aux dividendes massifs du groupe, avec un ratio de vote standard de 1:1.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 shadow-md">
                    <Lock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-widest text-black uppercase mb-1">Actions de Classe B</h4>
                    <p className="text-sm text-black/50 leading-relaxed">Non cotées, détenues exclusivement par Victor Blackwood et le trust fondateur. Elles confèrent un <strong className="text-black font-semibold">ratio de vote de 10:1</strong>, assurant un contrôle absolu et inaliénable sur toutes les décisions stratégiques.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-100/50 border border-black/10 rounded-[1.5rem] lg:rounded-[2rem] p-6 lg:p-8 flex flex-col justify-center">
              <div className="mb-8">
                <p className="text-[10px] lg:text-xs font-mono font-bold tracking-widest text-black/40 uppercase mb-2">Répartition des Droits de Vote</p>
                <div className="flex items-end gap-3 lg:gap-4 mb-2">
                  <span className="text-5xl lg:text-6xl font-serif text-black leading-none">71.4%</span>
                  <span className="text-xs lg:text-sm font-mono text-black/50 mb-1">Victor Blackwood</span>
                </div>
                <div className="w-full h-2 bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-black w-[71.4%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-end gap-4 mb-2">
                  <span className="text-4xl font-serif text-black/40 leading-none">28.6%</span>
                  <span className="text-sm font-mono text-black/50 mb-1">Flottant Public (Classe A)</span>
                </div>
                <div className="w-full h-2 bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-black/40 w-[28.6%]"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Board of Directors */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">Conseil d'Administration</h2>
          <p className="text-lg text-black/50 font-light max-w-2xl">
            L'élite décisionnelle du Monolithe. Une convergence d'expertises en finance, défense et intelligence artificielle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-zinc-50 rounded-[2.5rem] overflow-hidden border border-black/10 shadow-sm hover:shadow-2xl hover:bg-zinc-100 hover:-translate-y-1 transition-all duration-500 group flex flex-col"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-serif text-white mb-1">{member.name}</h3>
                  <p className="text-xs font-mono font-medium tracking-widest text-white/70 uppercase">{member.role}</p>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-black/40 uppercase block mb-1">Expertise</span>
                  <span className="text-sm font-medium text-black/80">{member.expertise}</span>
                </div>
                <p className="text-sm text-black/50 leading-relaxed font-light mt-auto">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MINERVA Oversight Committee */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-zinc-50 border border-black/10 rounded-[2rem] lg:rounded-[3rem] p-8 md:p-10 lg:p-16 relative overflow-hidden text-black shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05)_0%,transparent_60%)]"></div>
          <div className="absolute bottom-0 right-0 opacity-5 translate-x-1/4 translate-y-1/4 hidden md:block">
            <BrainCircuit className="w-96 h-96" />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-5 w-5 text-black/40" />
              <span className="text-[10px] lg:text-xs font-mono font-bold tracking-[0.2em] text-black/40 uppercase">
                Gestion des Risques Systémiques
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 lg:mb-8 leading-tight">
              Comité de Surveillance MINERVA
            </h2>
            
            <p className="text-base lg:text-lg text-black/60 font-light leading-relaxed mb-8">
              L'algorithme MINERVA opérant à une échelle et une vitesse dépassant l'entendement humain, BlackWood a institué un Comité de Surveillance exclusif. Ce comité ne limite pas la puissance de calcul de l'IA, mais s'assure de son alignement strict avec les intérêts vitaux de la corporation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black/10 pt-8 mt-12">
              <div>
                <h4 className="text-sm font-mono font-bold tracking-widest text-black uppercase mb-3">Évaluation Quantique</h4>
                <p className="text-sm text-black/50 font-light leading-relaxed">
                  Le comité valide les modèles probabilistes générés par MINERVA, s'assurant que les scénarios de "Cygne Noir" sont correctement provisionnés et neutralisés avant leur occurrence.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-mono font-bold tracking-widest text-black uppercase mb-3">Autorisation d'Exécution</h4>
                <p className="text-sm text-black/50 font-light leading-relaxed">
                  Bien que MINERVA soit autonome dans ses recommandations d'allocation d'actifs, les mouvements de capitaux dépassant les 50 milliards de dollars requièrent l'approbation cryptographique du Chairman.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      </div>
    </div>
  );
}
