import { motion } from 'motion/react';
import Hero from '../components/Hero';

export default function Legal() {
  return (
    <div className="w-full text-black transition-colors duration-300">
      <Hero 
        subtitle="Réglementation & Sécurité"
        title="Conformité & Mentions Légales"
        description="BlackWood International Corp. opère sous les régulations financières internationales les plus strictes. L'ensemble de nos activités est audité en continu par des entités indépendantes de niveau souverain pour garantir une transparence et une intégrité absolues."
        align="center"
        background="dark"
      />
      <div className="relative z-10 bg-white pb-32 pt-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="prose prose-lg  text-black/60 font-light max-w-none transition-colors">

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-serif text-black mb-4 transition-colors">1. Propriété Intellectuelle & Droits d'Auteur</h2>
                <p className="mb-4">
                  L'ensemble des éléments visuels, technologiques, stratégiques et textuels présentés sur ce portail institutionnel sont la propriété exclusive de BlackWood International Corp. et de ses filiales (notamment BlackWood Brand & Design).
                </p>
                <p>
                  Toute reproduction, distribution, modification ou utilisation non autorisée de ces actifs est strictement interdite et passible de poursuites pénales internationales immédiates.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-black mb-4 transition-colors">2. Confidentialité & Sécurité des Données</h2>
                <p className="mb-4">
                  Les données de nos partenaires institutionnels sont protégées par des systèmes de chiffrement quantique propriétaires développés par BlackWood Technologies. Notre infrastructure réseau est classifiée "Secret Défense" et isolée des réseaux publics.
                </p>
                <p>
                  Aucune donnée n'est partagée, vendue ou transférée à des tiers non accrédités. Les accès au portail partenaire sont monitorés 24/7 par nos centres d'opérations de sécurité globaux.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-black mb-4 transition-colors">3. Avertissement aux Investisseurs</h2>
                <p className="mb-4">
                  Les informations fournies sur ce site ne constituent en aucun cas une offre de vente ou une sollicitation d'achat de titres ou d'instruments financiers. Les investissements gérés par BlackWood Capital Investments comportent des risques et peuvent entraîner la perte totale du capital investi.
                </p>
                <p>
                  L'accès à nos fonds est exclusivement réservé aux investisseurs qualifiés, aux institutions souveraines et aux "Ultra High Net Worth Individuals" (UHNWI) ayant passé avec succès nos protocoles de vérification (KYC/AML) les plus stricts.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
