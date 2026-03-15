import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Button from '../components/Button';

export default function Divisions() {
  const divisions = [
    {
      id: "brand-design",
      name: "BlackWood Brand & Design",
      logo: "https://i.imgur.com/fIF4gae.png",
      description: "Agence créative interne chargée de façonner l'identité visuelle du groupe et de concevoir des interfaces de design d'élite pour l'ensemble des filiales et une clientèle exclusive.",
      image: "https://i.imgur.com/dkqzNnf.jpeg",
      details: {
        revenue: "$1.2B",
        growth: "+15%",
        employees: "450+",
        presence: "New York, Paris, Tokyo",
        extendedDesc: "BlackWood Brand & Design n'est pas une simple agence, c'est le gardien de l'esthétique et de l'influence de la holding. En alliant psychologie cognitive, design d'avant-garde et technologies immersives, nous concevons des expériences qui dictent les standards du luxe et de l'institutionnel. Nos clients externes sont triés sur le volet et incluent des gouvernements, des familles royales et des conglomérats du Fortune 50."
      }
    },
    {
      id: "capital",
      name: "BlackWood Capital Investments",
      logo: "https://i.imgur.com/gOzzh6Z.png",
      description: "Bras financier spécialisé dans la gestion d'actifs souverains, le trading haute fréquence et l'investissement stratégique sur les marchés mondiaux.",
      image: "https://i.imgur.com/7UiB8Hy.jpeg",
      details: {
        revenue: "$45B",
        growth: "+8.4%",
        employees: "3,200+",
        presence: "Global (42 hubs)",
        extendedDesc: "Le cœur battant de l'empire BlackWood. Avec plus de 600 milliards de dollars d'actifs sous gestion, notre division Capital Investments déploie des algorithmes prédictifs quantiques et une intelligence géopolitique sans pareille pour générer de l'alpha absolu. Nous structurons les dettes souveraines et finançons les infrastructures qui soutiendront l'économie du siècle prochain."
      }
    },
    {
      id: "defense",
      name: "BlackWood Defense & Dynamics",
      logo: "https://i.imgur.com/wdCNc0o.png",
      description: "Manufacture militaro-industrielle produisant des armements cinétiques lourds, des vecteurs aérospatiaux et des systèmes de renseignement éthique audités.",
      image: "https://i.imgur.com/onQexuG.jpeg",
      details: {
        revenue: "$28B",
        growth: "+22%",
        employees: "8,500+",
        presence: "Sites classifiés",
        extendedDesc: "La sécurité globale exige une supériorité technologique absolue. Defense & Dynamics fournit aux nations alliées les systèmes d'armes de nouvelle génération, des boucliers antimissiles orbitaux aux essaims de drones autonomes. Nos protocoles de renseignement éthique garantissent une utilisation conforme aux traités internationaux tout en assurant une dissuasion totale."
      }
    },
    {
      id: "events",
      name: "BlackWood Events",
      logo: "https://i.imgur.com/HnA7dDH.png",
      description: "Division dédiée à l'organisation de rassemblements de prestige, de sommets diplomatiques et d'événements exclusifs pour le réseau d'influence du groupe.",
      image: "https://i.imgur.com/9l2S4ib.jpeg",
      details: {
        revenue: "$850M",
        growth: "+12%",
        employees: "300+",
        presence: "Itinérant",
        extendedDesc: "L'influence se forge dans le secret et se célèbre dans l'exceptionnel. BlackWood Events orchestre les rencontres où se décide l'avenir de l'économie mondiale. Des sommets économiques privés dans les Alpes suisses aux galas caritatifs réunissant les 100 plus grandes fortunes mondiales, chaque événement est un chef-d'œuvre de logistique, de sécurité et de raffinement."
      }
    },
    {
      id: "logistics",
      name: "BlackWood Logistics",
      logo: "https://i.imgur.com/F4HRfNS.png",
      description: "Opérateur logistique global assurant la gestion des flux physiques critiques et le transport sécurisé des ressources et actifs industriels à travers le monde.",
      image: "https://i.imgur.com/OKCE6D1.jpeg",
      details: {
        revenue: "$12B",
        growth: "+6%",
        employees: "12,000+",
        presence: "180 Ports & Hubs",
        extendedDesc: "La colonne vertébrale du commerce mondial. BlackWood Logistics possède et opère une flotte souveraine de porte-conteneurs ultra-larges, d'avions cargos furtifs et de trains blindés. Nous garantissons la continuité des chaînes d'approvisionnement critiques, du transport de métaux rares pour l'industrie quantique à la livraison sécurisée d'œuvres d'art inestimables."
      }
    },
    {
      id: "photography",
      name: "BlackWood Photography",
      logo: "https://i.imgur.com/aG6FMq0.png",
      description: "Studio de production visuelle spécialisé dans la capture artistique et technique des actifs, des infrastructures et des événements privés du cercle BlackWood.",
      image: "https://i.imgur.com/kYGbnJH.jpeg",
      details: {
        revenue: "$120M",
        growth: "+5%",
        employees: "80+",
        presence: "Londres, Milan",
        extendedDesc: "La mémoire visuelle de l'institution. BlackWood Photography capture l'essence de nos actifs immobiliers, la puissance de nos créations industrielles et l'aura de nos dirigeants. Équipés des technologies de captation les plus avancées au monde, nos maîtres de l'image produisent des archives d'une qualité muséale, destinées aux rapports annuels et aux collections privées."
      }
    },
    {
      id: "racing",
      name: "BlackWood Racing",
      logo: "https://i.imgur.com/AH6I3XG.png",
      description: "Laboratoire de performance automobile utilisant la compétition de haut niveau pour éprouver les technologies de propulsion et les matériaux composites de demain.",
      image: "https://i.imgur.com/0CywhiR.jpeg",
      details: {
        revenue: "$400M",
        growth: "+18%",
        employees: "600+",
        presence: "Silverstone, UK",
        extendedDesc: "La vitesse comme vecteur d'innovation. BlackWood Racing engage des prototypes dans les championnats d'endurance les plus exigeants de la planète. Les données télémétriques récoltées en piste permettent de développer les batteries à l'état solide, les alliages ultra-légers et les algorithmes aérodynamiques qui équiperont les futurs véhicules de Royal Motors et les vecteurs de Defense & Dynamics."
      }
    },
    {
      id: "royal-motors",
      name: "BlackWood Royal Motors",
      logo: "https://i.imgur.com/0qduQXl.png",
      description: "Constructeur et concessionnaire de prestige spécialisé dans l'ingénierie et la distribution de véhicules terrestres, maritimes et aériens d'exception.",
      image: "https://i.imgur.com/Z5Jt69X.jpeg",
      details: {
        revenue: "$8.5B",
        growth: "+11%",
        employees: "4,100+",
        presence: "Genève, Monaco, Dubai",
        extendedDesc: "L'incarnation du luxe absolu et de la suprématie mécanique. Royal Motors ne produit pas de simples véhicules, mais des œuvres d'art cinétiques sur mesure. Des hypercars électriques aux yachts à hydrogène, chaque création est assemblée à la main pour une clientèle qui exige l'exclusivité totale, le blindage de niveau militaire et un confort inégalé."
      }
    },
    {
      id: "technologies",
      name: "BlackWood Technologies",
      logo: "https://i.imgur.com/swPC3yd.png",
      description: "Centre de recherche et développement focalisé sur l'intelligence artificielle propriétaire, le hardware quantique et la cybersécurité des infrastructures étatiques.",
      image: "https://i.imgur.com/ukCuMGf.jpeg",
      details: {
        revenue: "$18B",
        growth: "+35%",
        employees: "5,500+",
        presence: "Silicon Valley, Tel Aviv",
        extendedDesc: "L'architecte de demain. BlackWood Technologies conçoit les algorithmes qui prédisent les marchés, les intelligences artificielles qui optimisent nos chaînes logistiques et les processeurs quantiques qui sécurisent nos communications. Nous investissons massivement dans la fusion nucléaire, la biotechnologie et l'informatique spatiale pour garantir l'hégémonie technologique de la holding pour le siècle à venir."
      }
    }
  ];

  return (
    <div className="w-full text-black">
      <Hero 
        subtitle="Nos Piliers Stratégiques"
        title="L'Excellence Sectorielle"
        description="BlackWood International Corp. opère à travers des divisions hautement spécialisées, chacune leader incontesté dans son domaine. Cette diversification stratégique assure une résilience exceptionnelle face aux cycles économiques."
        background="dark"
      />
      <div className="relative z-10 bg-white pb-40 pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="space-y-40">
          {divisions.map((division, index) => (
            <motion.div
              id={division.id}
              key={division.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-zinc-50 border border-black/10 relative group">
                  <div className="absolute inset-0 bg-transparent group-hover:bg-black/20 transition-colors duration-700 z-10"></div>
                  <img 
                    src={division.image} 
                    alt={division.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="mb-10">
                  <img src={division.logo} alt={`${division.name} Logo`} className="h-20 md:h-28 object-contain opacity-80 brightness-0" referrerPolicy="no-referrer" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-black mb-6 tracking-tight">{division.name}</h2>
                <p className="text-lg text-black/60 leading-relaxed font-light mb-10">
                  {division.description}
                </p>
                
                <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-8">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-2 font-medium">Revenus</div>
                    <div className="text-2xl font-serif text-black">{division.details.revenue}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-2 font-medium">Croissance</div>
                    <div className="text-2xl font-serif text-black">{division.details.growth}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
