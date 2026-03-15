import { motion } from 'motion/react';
import { TrendingUp, ShieldCheck, Cpu, Users, FileText, ArrowRight, Landmark, Briefcase, BarChart3 } from 'lucide-react';
import Hero from '../components/Hero';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function BCI() {
  const pillars = [
    {
      icon: Briefcase,
      title: "Private Equity & Intégration Verticale",
      description: "Nous n'investissons pas pour obtenir de simples dividendes ; nous acquérons des actifs systémiques dont l'économie ne peut se passer. BCI SA orchestre l'acquisition, la restructuration et l'intégration d'entreprises locales au sein de notre écosystème."
    },
    {
      icon: BarChart3,
      title: "Public Equity & Activisme",
      description: "Pour les entités cotées, nous déployons des capitaux massifs afin de stabiliser les marchés ou d'orchestrer des prises de contrôle stratégiques. Nous agissons en tant que gestionnaire de crise macro-économique."
    }
  ];

  return (
    <div className="w-full text-black">
      <Hero 
        subtitle="Le Commerce de la Certitude"
        title={<>BlackWood Capital<br /><span className="italic text-black/40">Investments</span></>}
        description={<>
          <span className="block text-sm font-mono uppercase tracking-[0.2em] text-black/40 mb-6">— Division San Andreas</span>
          « L'émotion est la taxe que paient les investisseurs non préparés. BCI déploie une ingénierie financière mathématique pour transformer la volatilité du Royaume de San Andreas en une croissance systémique et souveraine. »
        </>}
        background="light"
      />

      <div className="relative z-10 bg-white pt-24">
        {/* Section 1: Vision */}
        <section className="py-32 px-6 md:px-8 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Landmark className="h-5 w-5 text-black/40" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-black/40 uppercase">Ancrage Local</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-black mb-8 leading-tight">
                L'Architecture de la <br />
                <span className="text-black/40 italic">Souveraineté Économique</span>
              </h2>
              <div className="space-y-6 text-lg text-black/60 font-light leading-relaxed">
                <p>
                  BlackWood Capital Investments (BCI) n'est pas un simple fonds d'investissement ; c'est le moteur financier d'une entité souveraine globale. Sur le territoire de San Andreas, nos opérations sont structurées sous l'égide de <span className="text-black font-medium italic">BlackWood San Andreas Holding</span>.
                </p>
                <p>
                  Ce bouclier juridique offre à nos partenaires locaux une sécurité inégalée et une conformité stricte face à la Couronne. Adossée au capital de la société mère new-yorkaise, notre division opère avec une seule doctrine : amputer toute émotion de la prise de décision pour offrir à nos clients un avantage asymétrique sur le marché.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-black/10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
                alt="Architecture Institutionnelle" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Pillars */}
        <section className="py-32 bg-zinc-50 border-y border-black/5">
          <div className="px-6 md:px-8 max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">Maîtriser l'Économie Réelle</h2>
              <p className="text-black/50 font-light max-w-2xl mx-auto">
                Nos piliers d'intervention à San Andreas sont conçus pour une domination sectorielle totale.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white p-12 rounded-[2.5rem] border border-black/10 shadow-sm hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-serif text-black mb-6">{pillar.title}</h3>
                  <p className="text-black/60 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Minerva */}
        <section className="py-32 px-6 md:px-8 max-w-[1400px] mx-auto">
          <div className="bg-black text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_60%)]"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Cpu className="h-5 w-5 text-white/40" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-white/40 uppercase">Garantie MINERVA</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                  La Gestion du Risque par <br />
                  <span className="text-white/40 italic">l'Intelligence Prédictive</span>
                </h2>
                <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
                  <p>
                    Confier ses capitaux à BlackWood Capital Investments SA, c'est investir sous la protection de <span className="text-white font-medium">MINERVA</span>. Notre plateforme d'analyse systémique ingère en temps réel des flux de données colossaux pour évaluer le risque de chaque actif.
                  </p>
                  <p>
                    Là où les marchés réagissent avec panique, MINERVA anticipe avec une précision chirurgicale, rendant nos portefeuilles pratiquement invulnérables aux krachs boursiers. Dans un écosystème imprévisible, BlackWood vend la seule denrée qui n'a plus de prix : <span className="italic">la certitude</span>.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative w-64 h-64">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-white/10 rounded-full border-dashed"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border border-white/5 rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                      <ShieldCheck className="h-12 w-12 text-white/80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Governance & CTA */}
        <section className="py-32 px-6 md:px-8 max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <Users className="h-10 w-10 text-black/20" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-8">Rejoindre l'Écosystème BlackWood</h2>
            <p className="text-xl text-black/60 font-light leading-relaxed max-w-3xl mx-auto mb-16">
              L'excellence exige la rigueur. La holding régionale est administrée selon des protocoles de gouvernance stricts, garantissant une subordination absolue aux directives de New York.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                label="Soumettre un dossier d'acquisition" 
                to="/contact" 
                variant="primary" 
                showArrow 
              />
              <Button 
                label="Demander une accréditation (Royal Elite)" 
                to="/contact" 
                variant="secondary" 
              />
            </div>
            
            <p className="mt-12 text-[10px] font-mono text-black/30 uppercase tracking-[0.3em]">
              Accès restreint — Accréditation rigoureuse requise
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
