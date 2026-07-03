/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Add projectsList
const projectsListCode = `
const projectsList = [
  { name: "Licter x Decathlon", id: "decathlon" },
  { name: "LVMH", id: "lvmh" },
  { name: "FairWay", id: "fairway" },
  { name: "UniSphere", id: "unisphere" }
];

const ProjectModal = ({ activeProject, onClose, onOpenGallery }: { activeProject: number | null, onClose: () => void, onOpenGallery: (images: string[], index: number) => void }) => {
  useEffect(() => {
    if (activeProject !== null) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [activeProject]);

  if (activeProject === null) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8" onClick={(e) => { if(e.target === e.currentTarget) onClose(); }}>
      <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 z-[90] text-white hover:text-red-400 transition-colors bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full">
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <div className="w-full max-w-6xl max-h-[90vh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden relative flex justify-center">
         <ProjectsTrack onOpenGallery={onOpenGallery} activeProject={activeProject} />
      </div>
    </div>
  );
};
`;

content = content.replace('const passionsList = [', projectsListCode + '\nconst passionsList = [');

// 2. Modify ProjectsTrack signature
content = content.replace(
  'const ProjectsTrack = ({ onOpenGallery }: { onOpenGallery: (images: string[], index: number) => void }) => (',
  'const ProjectsTrack = ({ onOpenGallery, activeProject }: { onOpenGallery: (images: string[], index: number) => void, activeProject?: number }) => ('
);

// 3. Add conditional rendering to projects in ProjectsTrack and change widths
content = content.replace('{/* Licter x Decathlon Project */}', '{/* Licter x Decathlon Project */}\n    {(activeProject === undefined || activeProject === 0) && (');
content = content.replace('{/* LVMH Project */}', '    )}\n\n    {/* LVMH Project */}\n    {(activeProject === undefined || activeProject === 1) && (');
content = content.replace('{/* FairWay Project */}', '    )}\n\n    {/* FairWay Project */}\n    {(activeProject === undefined || activeProject === 2) && (');
content = content.replace('{/* UniSphere Project */}', '    )}\n\n    {/* UniSphere Project */}\n    {(activeProject === undefined || activeProject === 3) && (');
content = content.replace(/<\/div>\n  <\/>\n\);\n\n\nconst/g, '    )}\n  </>\n);\n\n\nconst'); // close the last condition

content = content.replace(/snap-center shrink-0 w-\[90vw\] md:w-\[80vw\] lg:w-\[70vw\]/g, 'w-full');

// 4. Replace Home function
const homeCode = `
export default function Home() {
  const [gallery, setGallery] = useState<{images: string[], index: number} | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <main className="font-sans bg-black text-white h-[100dvh] w-screen overflow-hidden relative flex flex-col justify-between">
      <Lightbox gallery={gallery} onClose={() => setGallery(null)} />
      <AppointmentModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <ProjectModal activeProject={activeProject} onClose={() => setActiveProject(null)} onOpenGallery={(images, idx) => setGallery({images, index: idx})} />
      
      {/* Background Image Globale */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.JPG"
          alt="Amaury Despretz Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* HERO SECTION */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-widest uppercase drop-shadow-xl text-center">
          <Typewriter text="AMAURY DESPRETZ" speed={120} delay={600} />
        </h1>
        <h2 className="text-sm sm:text-lg md:text-2xl font-light tracking-[0.2em] drop-shadow-lg text-white uppercase mt-4 text-center">
          Étudiant à Eugenia School
        </h2>
        <p className="text-[10px] sm:text-xs md:text-base font-light tracking-[0.4em] drop-shadow-lg text-gray-300 uppercase mt-2 text-center">
          Portfolio
        </p>

        {/* Bouton Prendre RDV (Transparent) */}
        <button 
          onClick={() => setIsFormOpen(true)}
          className="mt-8 md:mt-12 px-6 py-2.5 md:px-8 md:py-3 bg-transparent border border-white/50 hover:bg-white hover:text-black transform text-white rounded-full transition-all duration-300 font-medium tracking-widest uppercase text-[10px] md:text-sm flex items-center gap-3 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
        >
          <span>Prendre RDV</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        </button>
      </div>
      
      {/* 3 LIGNES DEFILEMENT */}
      <div className="relative z-10 w-full flex flex-col gap-3 md:gap-5 pb-6 md:pb-10">
        
        {/* Passions Track */}
        <div className="w-full">
          <AutoScroll speed={1.5} gapClass="pr-3 gap-3 md:pr-4 md:gap-4">
            {passionsList.map((passion, index) => (
              <div key={index} className="snap-center shrink-0 w-44 md:w-56 bg-white/5 backdrop-blur-md rounded-xl shadow-sm border border-white/10 p-2.5 md:p-4 flex items-center gap-3 transform transition-all cursor-default hover:bg-white/10">
                <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {passion.icon}
                  </svg>
                </div>
                <h3 className="text-white font-medium tracking-widest uppercase text-[9px] md:text-xs leading-tight">
                  {passion.name}
                </h3>
              </div>
            ))}
          </AutoScroll>
        </div>

        {/* Compétences Track */}
        <div className="w-full">
          <AutoScroll speed={1.2} gapClass="pr-3 gap-3 md:pr-4 md:gap-4">
            {skillsList.map((skill, index) => (
              <div key={index} className="snap-center shrink-0 w-44 md:w-56 bg-white/5 backdrop-blur-md rounded-xl shadow-sm border border-white/10 p-2.5 md:p-4 flex items-center gap-3 transform transition-all cursor-default hover:bg-white/10">
                <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white overflow-hidden p-1.5 md:p-2">
                  {skill.image ? (
                    <Image src={skill.image} alt={skill.name} width={40} height={40} className="w-full h-full object-contain" />
                  ) : (
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {skill.icon}
                    </svg>
                  )}
                </div>
                <h3 className="text-white font-medium tracking-widest uppercase text-[9px] md:text-xs leading-tight">
                  {skill.name}
                </h3>
              </div>
            ))}
          </AutoScroll>
        </div>

        {/* Projets Track */}
        <div className="w-full">
          <AutoScroll speed={1} gapClass="pr-3 gap-3 md:pr-4 md:gap-4">
            {projectsList.map((proj, index) => (
              <div key={index} onClick={() => setActiveProject(index)} className="cursor-pointer snap-center shrink-0 w-44 md:w-56 bg-white/10 backdrop-blur-md rounded-xl shadow-sm border border-white/20 p-3.5 md:p-5 flex items-center justify-center transform transition-all hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-white font-bold tracking-widest uppercase text-[10px] md:text-xs leading-tight text-center">
                  {proj.name}
                </h3>
              </div>
            ))}
          </AutoScroll>
        </div>

      </div>
    </main>
  );
}
`;

const homeRegex = /export default function Home\(\) \{[\s\S]*?^}$/m;
content = content.replace(homeRegex, homeCode);

fs.writeFileSync('app/page.tsx', content);
console.log("Transformation completed.");
