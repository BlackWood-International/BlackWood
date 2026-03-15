import { motion } from 'motion/react';
import { BrainCircuit, Database, ShieldAlert, Crosshair, Activity, Network } from 'lucide-react';
import Hero from '../components/Hero';
import Button from '../components/Button';

export default function Minerva() {
  const features = [
    {
      icon: Database,
      title: "Ingestion Massive de Données",
      description: "MINERVA traite en temps réel des pétaoctets de données issues des marchés financiers mondiaux, des flux logistiques, des réseaux sociaux et des capteurs géopolitiques."
    },
    {
      icon: ShieldAlert,
      title: "Gestion Quantique des Risques",
      description: "Une évaluation probabiliste continue permet d'anticiper les cygnes noirs et de neutraliser les menaces systémiques avant qu'elles n'impactent nos actifs."
    },
    {
      icon: Crosshair,
      title: "Exécution Stratégique",
      description: "Des recommandations d'investissement et de déploiement d'actifs générées avec une précision chirurgicale, dictant la marche à suivre pour l'ensemble des divisions."
    }
  ];

  return (
    <div className="w-full text-black">
      <Hero 
        subtitle="Intelligence Prédictive Souveraine"
        title="MINERVA"
        description="Le système nerveux central de BlackWood International Corp. Une architecture d'intelligence artificielle propriétaire fusionnant l'analyse de données massives et la gestion des risques pour dicter l'avenir de l'économie mondiale."
        background="dark"
      />

      <div className="relative z-10 bg-white pb-32 pt-24">
        {/* Core Architecture */}
        <section id="overview" className="px-6 md:px-8 max-w-[1400px] mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">
              L'Omniscience Institutionnelle
            </h2>
            <p className="text-lg text-black/60 font-light leading-relaxed mb-12">
              Conçu à l'origine pour sécuriser les portefeuilles souverains de BlackWood Capital Investments, MINERVA a évolué pour devenir le moteur décisionnel absolu de la holding. Il ne se contente pas de lire les marchés ; il modélise des futurs possibles et prescrit la trajectoire optimale.
            </p>
            <div className="space-y-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center group-hover:bg-black/5 transition-colors duration-500">
                      <feature.icon className="h-5 w-5 text-black/80 group-hover:text-black transition-colors duration-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black mb-2 group-hover:text-black/90 transition-colors">{feature.title}</h3>
                    <p className="text-black/50 font-light leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-square rounded-[2.5rem] bg-zinc-50 border border-black/10 shadow-2xl overflow-hidden relative p-8 flex flex-col justify-between">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="flex items-center gap-3 bg-zinc-100/50 backdrop-blur-md px-4 py-2 rounded-full border border-black/5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-black/60 uppercase tracking-widest">System Active</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center border border-black/10">
                  <Network className="h-5 w-5 text-black/40" />
                </div>
              </div>

              <div className="relative z-10 flex-grow flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 rounded-full border border-black/10 border-dashed flex items-center justify-center relative"
                >
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 rounded-full border border-black/5 flex items-center justify-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-black/5 shadow-2xl shadow-black/5 flex items-center justify-center backdrop-blur-sm border border-black/10">
                      <Activity className="h-8 w-8 text-black/80" />
                    </div>
                  </motion.div>
                  
                  {/* Abstract data nodes */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black/10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-black/10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-black/10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-black/10 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
                </motion.div>
              </div>

              <div className="relative z-10 flex justify-between items-end bg-zinc-100/50 backdrop-blur-md p-4 rounded-2xl border border-black/5">
                <div className="font-mono text-[10px] text-black/40 space-y-1">
                  <p>Processing: 4.2 PB/s</p>
                  <p>Latency: 0.04ms</p>
                </div>
                <div className="text-right font-mono text-[10px] text-black/40 space-y-1">
                  <p>Model: MNV-3.1</p>
                  <p className="text-emerald-500/80">Status: Optimal</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* San Andreas Expansion */}
      <section id="san-andreas" className="px-6 md:px-8 max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-zinc-50 border border-black/10 rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.03)_0%,transparent_60%)]"></div>
          
          <div className="relative z-10 max-w-4xl">
            <span className="text-[10px] font-mono tracking-[0.2em] text-black/40 uppercase mb-8 block">
              Directive Stratégique
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-10 leading-tight">
              L'Expansion San Andreas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <p className="text-lg text-black/60 font-light leading-relaxed">
                L'implantation de BlackWood à San Andreas n'est pas une coïncidence géographique, mais le résultat direct d'une directive émise par MINERVA. Après avoir analysé les flux de capitaux émergents, les dynamiques d'innovation technologique et les opportunités immobilières sous-évaluées, le système a identifié San Andreas comme le prochain épicentre de la croissance économique mondiale.
              </p>
              <p className="text-lg text-black/60 font-light leading-relaxed">
                Aujourd'hui, MINERVA orchestre en temps réel l'acquisition de terrains stratégiques, le déploiement des infrastructures de BlackWood Logistics et l'allocation des fonds de Capital Investments sur ce nouveau territoire, garantissant une domination de marché dès les premières phases d'implantation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/10 pt-12">
              <div>
                <div className="text-4xl font-mono mb-2">99.8%</div>
                <div className="text-[10px] font-mono text-black/40 uppercase tracking-widest">Précision Prédictive</div>
              </div>
              <div>
                <div className="text-4xl font-mono mb-2">$12B</div>
                <div className="text-[10px] font-mono text-black/40 uppercase tracking-widest">Capital Alloué</div>
              </div>
              <div>
                <div className="text-4xl font-mono mb-2">Phase 1</div>
                <div className="text-[10px] font-mono text-black/40 uppercase tracking-widest">Statut Déploiement</div>
              </div>
              <div>
                <div className="text-4xl font-mono mb-2 text-emerald-500">Actif</div>
                <div className="text-[10px] font-mono text-black/40 uppercase tracking-widest">Monitoring Local</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      </div>
    </div>
  );
}
