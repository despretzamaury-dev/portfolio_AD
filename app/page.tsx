import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans bg-black text-white relative">
      {/* Background Image Globale */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Amaury Despretz Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden">
        {/* Content */}
        <div className="flex flex-col items-center gap-3 text-center text-white p-4">
          <h1 className="text-5xl font-bold tracking-widest uppercase md:text-7xl drop-shadow-xl sm:text-6xl">
            AMAURY DESPRETZ
          </h1>
          <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] drop-shadow-lg text-white uppercase mt-2">
            Étudiant à Eugenia School
          </h2>
          <p className="text-sm md:text-base font-light tracking-[0.4em] drop-shadow-lg text-gray-300 uppercase mt-1">
            Portfolio
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce text-white/70">
           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
           </svg>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="relative z-10 min-h-screen pt-24 pb-12 overflow-hidden flex flex-col">
        <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase mb-12 text-center text-white drop-shadow-md px-6">
          Mes Projets
        </h2>

        {/* 
          Container Défilant Horizontal 
          snap-x et snap-mandatory forcent l'alignement de chaque carte.
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-6 md:px-16 lg:px-32 pb-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full flex-1 items-stretch">
          
          {/* LVMH Project */}
          <div className="snap-center shrink-0 w-[90vw] md:w-[80vw] lg:w-[70vw] bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm border border-white/50 overflow-hidden transform transition-all hover:shadow-xl duration-500 flex flex-col">
            <div className="p-8 md:p-14">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-gray-200/60 pb-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-light tracking-wide text-[#333]">
                    <strong className="font-semibold text-black">LVMH</strong> / Business Development
                  </h3>
                  <p className="text-[#888] mt-3 uppercase tracking-[0.15em] text-sm md:text-base font-medium">
                    Data Strategy & Dashboarding
                  </p>
                </div>
                <div className="px-5 py-2.5 bg-[#2C2B29] text-white text-xs md:text-sm uppercase tracking-widest rounded-full self-start md:self-end text-center whitespace-nowrap">
                  Projet Professionnel
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
                {/* Approche Business */}
                <div className="space-y-5">
                  <h4 className="text-lg md:text-xl tracking-[0.1em] uppercase text-[#4A4742] font-medium flex items-center gap-3">
                    <span className="text-sm font-bold text-[#AFA492]">01</span>
                    Notre Approche Business
                  </h4>
                  <ul className="space-y-4 text-[#555] font-light md:text-lg">
                    <li className="flex items-center gap-3"><span className="block w-8 h-[1px] bg-[#D7CCBC]"></span> Le Clientelling</li>
                    <li className="flex items-center gap-3"><span className="block w-8 h-[1px] bg-[#D7CCBC]"></span> La Supply Chain</li>
                    <li className="flex items-center gap-3"><span className="block w-8 h-[1px] bg-[#D7CCBC]"></span> E-Commerce / SEO</li>
                    <li className="flex items-center gap-3"><span className="block w-8 h-[1px] bg-[#D7CCBC]"></span> Prédictions</li>
                  </ul>
                </div>

                {/* Taxonomie */}
                <div className="space-y-5">
                  <h4 className="text-lg md:text-xl tracking-[0.1em] uppercase text-[#4A4742] font-medium flex items-center gap-3">
                    <span className="text-sm font-bold text-[#AFA492]">02</span>
                    Taxonomie Seller
                  </h4>
                  <p className="text-[#666] font-light leading-relaxed">
                    Création d'un Dashboard axé sur la <strong>Maison Fendi</strong>, structurant la donnée autour des insights clients :
                  </p>
                  <ul className="space-y-2 text-[#555] font-light list-disc pl-5">
                    <li><strong>Motivations</strong> : Cadeau Luxe, Look Créatif, Héritage, Usage Quotidien</li>
                    <li><strong>Budgets</strong> : Access, Core, Premium, VIC</li>
                    <li><strong>Produits</strong> : Peekaboo, Baguette, Fendi First...</li>
                    <li><strong>Lifestyle</strong> : Italian Style, Art & Design, VIP...</li>
                  </ul>
                </div>

                {/* RGPD */}
                <div className="space-y-5">
                  <h4 className="text-lg md:text-xl tracking-[0.1em] uppercase text-[#4A4742] font-medium flex items-center gap-3">
                    <span className="text-sm font-bold text-[#AFA492]">03</span>
                    Data Cleaning / RGPD
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#666] font-light leading-relaxed">
                    <div>
                      <strong className="block text-[#444] mb-2 font-normal">RGPD</strong>
                      Problématiques juridiques et éthiques. Définition des contraintes pour l'IA.
                    </div>
                    <div>
                      <strong className="block text-[#444] mb-2 font-normal">Nettoyage</strong>
                      Élimination des mots inutiles et des caractères parasites.
                    </div>
                  </div>
                </div>

                {/* Automatisation */}
                <div className="space-y-5">
                  <h4 className="text-lg md:text-xl tracking-[0.1em] uppercase text-[#4A4742] font-medium flex items-center gap-3">
                    <span className="text-sm font-bold text-[#AFA492]">04</span>
                    Automatisation
                  </h4>
                  <p className="text-[#666] font-light leading-relaxed">
                    Déploiement d'outils automatisés pour faciliter et optimiser le processus de vente en boutique :
                  </p>
                  <ul className="space-y-2 text-[#555] font-light list-disc pl-5">
                    <li>Recommandation Commerciale Intelligente</li>
                    <li>Assistant Retail performant</li>
                  </ul>
                </div>
              </div>

              {/* Placeholder Section for Images */}
              <div className="mt-16 pt-10 border-t border-gray-200/60 flex flex-col items-center">
                <p className="text-xs md:text-sm text-[#888] uppercase tracking-[0.2em] mb-6 font-medium">Extraits de la présentation</p>
                <div className="w-full h-80 bg-[#fbf9f6] rounded-2xl flex items-center justify-center border-2 border-dashed border-[#e0d6c8] group transition cursor-pointer hover:bg-[#f2efe9]">
                  <div className="text-center text-[#AFA492]">
                    <svg className="mx-auto h-12 w-12 mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p className="font-light tracking-wide text-sm px-4">Espace réservé à vos slides LVMH.<br />(Ajoutez vos images dans le code si vous le souhaitez)</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* FairWay Project */}
          <div className="snap-center shrink-0 w-[90vw] md:w-[80vw] lg:w-[70vw] bg-[#2D4539] rounded-3xl shadow-lg border border-[#3b5949] overflow-hidden transform transition-all hover:shadow-2xl duration-500 flex flex-col">
            <div className="p-8 md:p-14 text-[#E8DCC0]">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#3b5949] pb-8">
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-[#EED8A1]">
                    FairWay 
                  </h3>
                  <p className="text-[#A5BAAC] mt-3 uppercase tracking-[0.15em] text-sm md:text-base font-medium">
                    Swing your way — Application Mobile
                  </p>
                </div>
                <div className="px-5 py-2.5 bg-[#EED8A1] text-[#2D4539] font-bold text-xs md:text-sm uppercase tracking-widest rounded-full self-start md:self-end">
                  Projet Académique
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
                {/* Proposition de Valeur */}
                <div className="space-y-5">
                  <h4 className="text-lg md:text-xl tracking-[0.1em] uppercase text-white font-medium flex items-center gap-3">
                    <span className="text-sm font-bold text-[#EED8A1]">01</span>
                    Proposition de Valeur
                  </h4>
                  <p className="text-[#B9CCBF] font-light leading-relaxed">
                    Démocratiser le golf et offrir un accompagnement personnalisé.
                  </p>
                  <ul className="space-y-3 text-[#B9CCBF] font-light list-none">
                    <li className="flex items-start gap-3"><span className="text-[#EED8A1] mt-1">✦</span> <span><strong>Centralisation</strong> : Toute l'expérience golf dans une seule app.</span></li>
                    <li className="flex items-start gap-3"><span className="text-[#EED8A1] mt-1">✦</span> <span><strong>Innovation IA</strong> : Coaching personnalisé et analyse de swing.</span></li>
                    <li className="flex items-start gap-3"><span className="text-[#EED8A1] mt-1">✦</span> <span><strong>Social</strong> : Matching entre joueurs et communautés.</span></li>
                  </ul>
                </div>

                {/* Modèle & Partenariats */}
                <div className="space-y-5">
                  <h4 className="text-lg md:text-xl tracking-[0.1em] uppercase text-white font-medium flex items-center gap-3">
                    <span className="text-sm font-bold text-[#EED8A1]">02</span>
                    Modèle & Partenariats
                  </h4>
                  <ul className="space-y-3 text-[#B9CCBF] font-light list-none">
                    <li className="flex items-start gap-3"><span className="text-[#EED8A1] mt-1">⛳</span> <span>Partenariat technologique clé avec <strong>Mistral AI</strong> (Solution française).</span></li>
                    <li className="flex items-start gap-3"><span className="text-[#EED8A1] mt-1">⛳</span> <span>Réseau de parcours partenaires via <strong>Bleu Green</strong>.</span></li>
                    <li className="flex items-start gap-3"><span className="text-[#EED8A1] mt-1">⛳</span> <span>Modèle d'abonnements : <i>Plus</i> (6.99€/mois) & <i>Pro</i> (9.99€/mois).</span></li>
                  </ul>
                </div>

                {/* Marché & Objectifs */}
                <div className="space-y-5">
                  <h4 className="text-lg md:text-xl tracking-[0.1em] uppercase text-white font-medium flex items-center gap-3">
                    <span className="text-sm font-bold text-[#EED8A1]">03</span>
                    Marché & Objectifs
                  </h4>
                  <div className="bg-[#24382D] rounded-2xl p-5 border border-[#3b5949]">
                    <ul className="space-y-2 text-[#B9CCBF] text-sm md:text-base font-light">
                      <li className="flex justify-between border-b border-[#3b5949] pb-2"><span>Marché Cible (SAM) :</span> <strong>150 000 golfeurs</strong></li>
                      <li className="flex justify-between border-b border-[#3b5949] py-2"><span>Taux de conversion :</span> <strong>35%</strong></li>
                      <li className="flex justify-between border-b border-[#3b5949] py-2"><span>Abonnés cibles :</span> <strong>2 625</strong></li>
                      <li className="flex justify-between pt-2 text-[#EED8A1]"><span>CA Année 3 :</span> <strong>249 000 € / an</strong></li>
                    </ul>
                  </div>
                </div>

                {/* Analyse Concurrentielle */}
                <div className="space-y-5">
                  <h4 className="text-lg md:text-xl tracking-[0.1em] uppercase text-white font-medium flex items-center gap-3">
                    <span className="text-sm font-bold text-[#EED8A1]">04</span>
                    Analyse Concurrentielle
                  </h4>
                  <p className="text-[#B9CCBF] font-light leading-relaxed">
                    Sur un marché très concurrentiel (<i>Hole19, Golfshot, HelloBirdie</i>), notre différenciation s'appuie sur trois piliers :
                  </p>
                  <ul className="space-y-2 text-[#B9CCBF] font-light list-disc pl-5">
                    <li>Innovation technologique (Analyse de performance IA)</li>
                    <li>Expérience Utilisateur simple et premium sur le parcours</li>
                    <li>Partenariats stratégiques pour asseoir la crédibilité (Coachs, Clubs)</li>
                  </ul>
                </div>
              </div>

              {/* Placeholder Section for Images */}
              <div className="mt-16 pt-10 border-t border-[#3b5949] flex flex-col items-center">
                <p className="text-xs md:text-sm text-[#A5BAAC] uppercase tracking-[0.2em] mb-6 font-medium">Extraits de la présentation</p>
                <div className="w-full h-80 bg-[#24382D] rounded-2xl flex items-center justify-center border-2 border-dashed border-[#3b5949] group transition cursor-pointer hover:bg-[#1f2f26]">
                  <div className="text-center text-[#4A6B56]">
                    <svg className="mx-auto h-12 w-12 mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p className="font-light tracking-wide text-sm px-4">Espace réservé à vos slides FairWay.<br />(Ajoutez vos images dans le code si vous le souhaitez)</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* UniSphere Project */}
          <div className="snap-center shrink-0 w-[90vw] md:w-[80vw] lg:w-[70vw] bg-[#121212] rounded-3xl shadow-lg border border-[#222] overflow-hidden transform transition-all hover:shadow-2xl duration-500 flex flex-col">
            <div className="p-8 md:p-14 text-[#E0E0E0]">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#333] pb-8">
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white flex items-baseline">
                    UniSphere<span className="text-[#00D084]">.</span>
                  </h3>
                  <p className="text-[#888] mt-3 uppercase tracking-[0.15em] text-sm md:text-base font-medium">
                    SaaS — Plateforme Étudiante Centralisée
                  </p>
                </div>
                <div className="px-5 py-2.5 bg-[#00D084]/10 border border-[#00D084]/30 text-[#00D084] font-bold text-xs md:text-sm uppercase tracking-widest rounded-full self-start md:self-end">
                  Projet Étudiant
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
                {/* Vision */}
                <div className="space-y-5">
                  <h4 className="text-lg md:text-xl tracking-[0.1em] uppercase text-white font-medium flex items-center gap-3">
                    <span className="text-sm font-bold text-[#00D084]">01</span>
                    La Vision
                  </h4>
                  <p className="text-[#A0A0A0] font-light leading-relaxed">
                    <strong>Plus qu'une plateforme.</strong> Un écosystème conçu pour centraliser, mesurer et transformer chaque projet étudiant en succès collectif. 
                  </p>
                  <p className="text-[#A0A0A0] font-light leading-relaxed">
                    Étudiants, BDE, associations, administration et partenaires travaillent ensemble dans un environnement unique pour l'école.
                  </p>
                </div>

                {/* Le Constat */}
                <div className="space-y-5">
                  <h4 className="text-lg md:text-xl tracking-[0.1em] uppercase text-white font-medium flex items-center gap-3">
                    <span className="text-sm font-bold text-[#00D084]">02</span>
                    Le Constat
                  </h4>
                  <ul className="space-y-4 text-[#A0A0A0] font-light list-none">
                    <li className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'conic-gradient(#00D084 83%, #333 0)' }}>
                         <div className="absolute w-10 h-10 bg-[#121212] rounded-full flex items-center justify-center">
                            <span className="text-white text-[10px] font-bold">83%</span>
                         </div>
                      </div>
                      <span className="text-sm md:text-base flex-1">Missions ambassadeurs non suivies ou non mesurées.</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'conic-gradient(#00D084 74%, #333 0)' }}>
                         <div className="absolute w-10 h-10 bg-[#121212] rounded-full flex items-center justify-center">
                            <span className="text-white text-[10px] font-bold">74%</span>
                         </div>
                      </div>
                      <span className="text-sm md:text-base flex-1">Signalements non centralisés et mal gérés.</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'conic-gradient(#00D084 82%, #333 0)' }}>
                         <div className="absolute w-10 h-10 bg-[#121212] rounded-full flex items-center justify-center">
                            <span className="text-white text-[10px] font-bold">82%</span>
                         </div>
                      </div>
                      <span className="text-sm md:text-base flex-1">Associations en manque de visibilité et d'outils.</span>
                    </li>
                  </ul>
                </div>

                {/* Pourquoi maintenant ? */}
                <div className="space-y-5">
                  <h4 className="text-lg md:text-xl tracking-[0.1em] uppercase text-white font-medium flex items-center gap-3">
                    <span className="text-sm font-bold text-[#00D084]">03</span>
                    Le Besoin des Écoles
                  </h4>
                  <ul className="space-y-4 text-[#A0A0A0] font-light list-none">
                    <li className="flex items-start gap-4">
                      <span className="text-xl font-light text-[#00D084]">01</span> 
                      <span className="pt-0.5 leading-relaxed">La vie étudiante évolue vite et devient de plus en plus riche en activités.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-xl font-light text-[#00D084]">02</span> 
                      <span className="pt-0.5 leading-relaxed">Les écoles exigent une meilleure visibilité et un pilotage accru sur ce qui se passe sur leurs campus.</span>
                    </li>
                  </ul>
                </div>

                {/* Mon Rôle */}
                <div className="space-y-5">
                  <h4 className="text-lg md:text-xl tracking-[0.1em] uppercase text-white font-medium flex items-center gap-3">
                    <span className="text-sm font-bold text-[#00D084]">04</span>
                    L'Équipe & Rôle
                  </h4>
                  <p className="text-[#A0A0A0] font-light leading-relaxed mb-4">
                    Projet réalisé en équipe pluridisciplinaire :
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#1A1A1A] p-4 rounded-xl border border-[#333] text-center">
                      <strong className="block text-white mb-1">Jennie</strong>
                      <span className="text-xs text-[#888] uppercase">Chef de projet</span>
                    </div>
                    <div className="bg-[#1A1A1A] p-4 rounded-xl border border-[#333] text-center">
                      <strong className="block text-white mb-1">Jules & Walid</strong>
                      <span className="text-xs text-[#888] uppercase">Backend Devs</span>
                    </div>
                    <div className="bg-[#00D084]/5 p-4 rounded-xl border border-[#00D084]/30 text-center col-span-2">
                      <strong className="block text-white mb-1 font-medium">Amaury Despretz</strong>
                      <span className="text-xs text-[#00D084] uppercase font-bold tracking-widest">UI / UX Design</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Placeholder Section for Images */}
              <div className="mt-16 pt-10 border-t border-[#333] flex flex-col items-center">
                <p className="text-xs md:text-sm text-[#666] uppercase tracking-[0.2em] mb-6 font-medium">Extraits de la présentation</p>
                <div className="w-full h-80 bg-[#161616] rounded-2xl flex items-center justify-center border-2 border-dashed border-[#333] group transition cursor-pointer hover:bg-[#1A1A1A]">
                  <div className="text-center text-[#555]">
                    <svg className="mx-auto h-12 w-12 mb-4 group-hover:scale-110 group-hover:text-[#00D084] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p className="font-light tracking-wide text-sm px-4">Espace réservé à vos slides UniSphere.<br />(Ajoutez vos images dans le code si vous le souhaitez)</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative z-10 w-full bg-black/80 backdrop-blur-lg border-t border-white/10 py-24 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase mb-16 text-center text-white drop-shadow-md px-6">
          Me Contacter
        </h2>
        
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-4 text-xl md:text-2xl font-light tracking-widest">
            <a href="mailto:despretzamaury@gmail.com" className="text-gray-200 hover:text-white transition-colors duration-300">
              despretzamaury@gmail.com
            </a>
            <a href="tel:+33781400086" className="text-gray-200 hover:text-white transition-colors duration-300">
              07 81 40 00 86
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mt-4 text-lg md:text-xl font-light tracking-widest text-gray-300">
            <a href="https://instagram.com/amau_dsp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-105">
              Insta : @amau_dsp
            </a>
            <a href="https://linkedin.com/in/amaury-despretz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-105">
              LinkedIn : Amaury Despretz
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 w-64">
            <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-gray-400">
              Paris – France
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
