import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

export default function Home() {
  const stats = [
    { label: "Actifs sous gestion", value: "$600B+" },
    { label: "Valorisation boursière", value: "$450B+" },
    { label: "Présence mondiale", value: "42 Pays" },
    { label: "Collaborateurs d'élite", value: "15,000+" }
  ];

  return (
    <div className="w-full text-black">
      <Hero 
        subtitle="Excellence Institutionnelle"
        title="Façonner l'Avenir de l'Économie Mondiale."
        description="BlackWood International Corp. est une holding mondiale supervisant l'intégration systémique de divisions financières, technologiques et industrielles pour assurer une croissance stratégique et une domination économique globale."
        primaryAction={{ label: "Découvrir nos divisions", to: "/divisions" }}
        secondaryAction={{ label: "Contact", to: "/contact" }}
        background="light"
      />

      {/* Stats Section */}
      <section className="relative z-10 pt-24 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center md:text-left"
              >
                <div className="text-5xl md:text-6xl font-serif font-medium text-black mb-4 tracking-tighter">{stat.value}</div>
                <div className="text-[11px] font-medium text-black/50 uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative z-10 py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-black mb-8 leading-[1.1] tracking-tight">
                Une approche holistique de l'investissement global.
              </h2>
              <p className="text-lg lg:text-xl text-black/60 leading-relaxed mb-12 font-light">
                Notre philosophie repose sur une compréhension profonde des dynamiques macroéconomiques et une gestion des risques d'une précision chirurgicale. Nous n'investissons pas seulement dans des entreprises ; nous investissons dans des infrastructures critiques, des technologies de rupture et des secteurs qui définissent le siècle prochain.
              </p>
              <ul className="space-y-10">
                {[
                  { icon: TrendingUp, title: "Performance Absolue", desc: "Des rendements constants ajustés au risque sur des cycles de marché complets." },
                  { icon: Shield, title: "Gestion des Risques", desc: "Une architecture de préservation du capital rigoureuse et éprouvée." },
                  { icon: Globe, title: "Portée Globale", desc: "Une présence stratégique sur les marchés développés et émergents les plus prometteurs." }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center group-hover:bg-black/5 transition-colors duration-500">
                        <item.icon className="h-5 w-5 text-black" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-medium text-black tracking-tight">{item.title}</h4>
                      <p className="mt-2 text-[15px] text-black/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-50 relative border border-black/10">
                <img 
                  src="https://i.imgur.com/s5M8qrA.jpeg" 
                  alt="BlackWood Headquarters Exterior" 
                  className="object-cover w-full h-full opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-12 -left-12 bg-white border border-black/10 p-10 rounded-[2rem] shadow-2xl max-w-sm hidden lg:block"
              >
                <p className="font-serif text-3xl text-black mb-4 leading-tight tracking-tight">"La rigueur est la fondation de la pérennité."</p>
                <p className="text-[11px] text-black/50 font-medium uppercase tracking-[0.2em]">— Victor Blackwood</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
