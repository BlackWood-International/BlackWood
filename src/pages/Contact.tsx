import { motion } from 'motion/react';
import { Shield, ArrowRight, MapPin, Mail, Phone, Clock, Globe } from 'lucide-react';
import Hero from '../components/Hero';

export default function Contact() {
  const offices = [
    {
      city: "New York",
      role: "Siège Mondial",
      address: "BlackWood Tower, 517 W 35th St, NY 10001",
      phone: "+1 (212) 555-0198",
      email: "ny.office@blackwood-corp.com"
    },
    {
      city: "Los Santos",
      role: "Holding Régionale (San Andreas)",
      address: "Ocean View Complex, Del Perro, LS 90210",
      phone: "+1 (323) 555-0421",
      email: "sa.holding@blackwood-corp.com"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-black">
      <Hero 
        subtitle="Relations Institutionnelles"
        title={<>L'Excellence <br className="hidden md:block" /><span className="italic text-black/50">du Dialogue.</span></>}
        description="Nos protocoles de communication garantissent une confidentialité absolue et une réactivité chirurgicale pour nos partenaires et investisseurs."
        background="light"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-24 pb-40">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Form & Intranet */}
          <div className="w-full lg:w-1/2 flex flex-col gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-zinc-50 p-8 md:p-12 rounded-[3rem] border border-black/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-black/10 transition-colors duration-700" />
              
              <h2 className="text-3xl font-serif mb-10 relative z-10">Canal Sécurisé</h2>
              
              <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group/input">
                  <input type="text" id="name" className="w-full bg-transparent border-b border-black/20 py-4 text-sm focus:outline-none focus:border-black transition-colors peer placeholder-transparent" placeholder="Nom" />
                  <label htmlFor="name" className="absolute left-0 top-4 text-sm text-black/40 transition-all peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-black peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest cursor-text">
                    Nom de l'entité ou représentant
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-500 peer-focus:w-full" />
                </div>
                
                <div className="relative group/input">
                  <input type="email" id="email" className="w-full bg-transparent border-b border-black/20 py-4 text-sm focus:outline-none focus:border-black transition-colors peer placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 top-4 text-sm text-black/40 transition-all peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-black peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest cursor-text">
                    Adresse email accréditée
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-500 peer-focus:w-full" />
                </div>
                
                <div className="relative group/input">
                  <textarea id="message" rows={4} className="w-full bg-transparent border-b border-black/20 py-4 text-sm focus:outline-none focus:border-black transition-colors peer resize-none placeholder-transparent" placeholder="Message"></textarea>
                  <label htmlFor="message" className="absolute left-0 top-4 text-sm text-black/40 transition-all peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-black peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest cursor-text">
                    Objet de la communication
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-500 peer-focus:w-full" />
                </div>
                
                <button className="w-full bg-black text-white py-5 rounded-2xl text-xs font-mono uppercase tracking-[0.2em] hover:bg-black/80 transition-all duration-300 flex items-center justify-center gap-3 group/btn mt-8 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1">
                  Transmettre
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-12 bg-black text-white rounded-[3rem] shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/10 backdrop-blur-md">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-3xl font-serif mb-4">Intranet Sécurisé</h3>
                <p className="text-white/60 font-light leading-relaxed mb-10">
                  Accès exclusif réservé aux collaborateurs et partenaires accrédités. Authentification multifacteur requise.
                </p>
                
                <a 
                  href="https://discord.gg/gP2THV8NAX" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white hover:text-white/70 transition-colors group/link"
                >
                  Accéder au Réseau
                  <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Offices & Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl font-serif mb-12">Bureaux Internationaux</h2>
              <div className="flex flex-col gap-12">
                {offices.map((office, index) => (
                  <div key={index} className="group cursor-default">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-500">
                        <MapPin className="h-3 w-3" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">{office.role}</div>
                        <h3 className="text-2xl font-serif">{office.city}</h3>
                      </div>
                    </div>
                    
                    <div className="pl-12 space-y-4 text-sm text-black/60 font-light">
                      <p className="hover:text-black transition-colors">{office.address}</p>
                      <div className="flex items-center gap-3 hover:text-black transition-colors">
                        <Phone className="h-3 w-3 text-black/30" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 hover:text-black transition-colors">
                        <Mail className="h-3 w-3 text-black/30" />
                        <a href={`mailto:${office.email}`} className="hover:underline underline-offset-4">{office.email}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 pt-12 border-t border-black/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-black/60" />
                </div>
                <h3 className="text-xl font-serif">Disponibilité Opérationnelle</h3>
              </div>
              <p className="text-black/60 font-light leading-relaxed mb-8 text-sm">
                Nos centres de coordination opèrent selon des fuseaux horaires complémentaires pour assurer une couverture mondiale 24/7 pour les urgences institutionnelles.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-zinc-50 border border-black/5 hover:border-black/10 transition-colors">
                  <div className="text-xs font-bold uppercase tracking-widest mb-2">New York</div>
                  <div className="text-[10px] text-black/50 font-mono">EST (UTC-5)</div>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-50 border border-black/5 hover:border-black/10 transition-colors">
                  <div className="text-xs font-bold uppercase tracking-widest mb-2">Los Santos</div>
                  <div className="text-[10px] text-black/50 font-mono">PST (UTC-8)</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
