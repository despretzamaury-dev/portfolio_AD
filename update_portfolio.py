import re

with open("app/page.tsx", "r") as f:
    content = f.read()

# 1. Provide the new components
new_imports_components = """import { useState, useRef, useEffect } from "react";

const AutoScrollContainer = ({ children, speed = 1, className = "" }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const exactScrollRef = useRef(0);

  useEffect(() => {
    let animationId: number;
    const container = containerRef.current;
    if (!container) return;
    
    exactScrollRef.current = container.scrollLeft;

    const scroll = () => {
      if (!isHovered && !isTouching) {
        exactScrollRef.current += speed;
        // Handle manual native scroll sync
        if (Math.abs(exactScrollRef.current - container.scrollLeft) > 2) {
          exactScrollRef.current = container.scrollLeft;
        } else {
          container.scrollLeft = exactScrollRef.current;
        }

        if (container.scrollLeft >= container.scrollWidth / 2) {
           container.scrollLeft -= container.scrollWidth / 2;
           exactScrollRef.current = container.scrollLeft;
        }
      } else {
        exactScrollRef.current = container.scrollLeft;
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isTouching, speed]);

  return (
    <div 
      className={`flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsTouching(true)}
      onTouchEnd={() => setIsTouching(false)}
    >
      {children}
    </div>
  );
};

const ProjectGallery = ({ images, title, borderColor }: { images: string[], title: string, borderColor: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openIndex !== null && scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollLeft = width * openIndex;
    }
  }, [openIndex]);

  return (
    <>
      <div className="flex gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x">
        {images.map((src, idx) => (
          <div 
             key={idx} 
             className={`relative shrink-0 snap-center w-[85%] md:w-[60%] lg:w-[45%] h-48 md:h-64 rounded-xl overflow-hidden cursor-pointer shadow-md border ${borderColor} hover:opacity-80 transition-opacity`}
             onClick={() => setOpenIndex(idx)}
          >
            <Image src={src} alt={`Slide ${title} ${idx+1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
      
      {openIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col justify-center">
          <button onClick={() => setOpenIndex(null)} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-gray-300 z-[101] p-2">
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <p className="absolute top-8 left-1/2 -translate-x-1/2 text-white/50 text-xs sm:text-sm tracking-widest uppercase pointer-events-none hidden md:block">Faites glisser pour naviguer</p>
          
          <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory w-full h-full items-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none">
            {images.map((src, idx) => (
              <div key={idx} className="snap-center shrink-0 w-full h-full max-h-screen relative p-4 sm:p-12">
                 <Image src={src} alt={`Slide ${title} ${idx+1}`} fill className="object-contain" quality={100} draggable={false} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
"""

# Replace `import { useState } from "react";` and `ClickableImage` with the new ones.
# First, remove ClickableImage
content = re.sub(r'import { useState } from "react";\s*const ClickableImage.*?;\s*};\s*', '', content, flags=re.DOTALL)
# Inject imports and logic right after import Image from "next/image";
content = content.replace('import Image from "next/image";', 'import Image from "next/image";\n' + new_imports_components)

# 2. Re-wire Galleries
lvmh_gallery_match = r'<div className="flex gap-6 overflow-x-auto pb-6 \[scrollbar-width:none\] \[&::-webkit-scrollbar\]:hidden snap-x">\s*{\[1, 2, 3, 4, 5, 6, 7\].map\(\(num\) => \(.*?\)\)}\s*</div>'
content = re.sub(lvmh_gallery_match, '<ProjectGallery images={[1,2,3,4,5,6,7].map(num => `/ign/${num}.png`)} title="LVMH" borderColor="border-gray-200/50" />', content, flags=re.DOTALL)

fairway_gallery_match = r'<div className="flex gap-6 overflow-x-auto pb-6 \[scrollbar-width:none\] \[&::-webkit-scrollbar\]:hidden snap-x">\s*{Array.from.*?\)}\s*</div>'
content = re.sub(fairway_gallery_match, '<ProjectGallery images={Array.from({length: 18}, (_, i) => `/FairWay/${i + 1}.jpg`)} title="FairWay" borderColor="border-[#3b5949]" />', content, flags=re.DOTALL)

unisphere_gallery_match = r'<div className="flex gap-6 overflow-x-auto pb-6 \[scrollbar-width:none\] \[&::-webkit-scrollbar\]:hidden snap-x">\s*{\[1, 2, 3, 4, 5, 6\].map\(\(num\) => \(.*?\)\)}\s*</div>'
content = re.sub(unisphere_gallery_match, '<ProjectGallery images={[1,2,3,4,5,6].map(num => `/UniSphere/${num}.jpg`)} title="UniSphere" borderColor="border-[#333]" />', content, flags=re.DOTALL)

# 3. Replace marquee wrappers with AutoScrollContainer
projects_marquee = r'<div className="group flex overflow-hidden w-full pb-16">\s*<div className="flex shrink-0 animate-marquee-slow pr-8 gap-8 items-stretch">\s*<ProjectsTrack />\s*</div>\s*<div className="flex shrink-0 animate-marquee-slow pr-8 gap-8 items-stretch" aria-hidden="true">\s*<ProjectsTrack />\s*</div>\s*</div>'
projects_new = r"""<div className="w-full pb-16 group">
          <AutoScrollContainer speed={0.5} className="snap-x snap-mandatory">
            <div className="flex shrink-0 gap-8 pr-8 items-stretch">
              <ProjectsTrack />
            </div>
            <div className="flex shrink-0 gap-8 pr-8 items-stretch" aria-hidden="true">
              <ProjectsTrack />
            </div>
          </AutoScrollContainer>
        </div>"""
content = re.sub(projects_marquee, projects_new, content)

# Skills & Passions use the same marquee structure internally
def replace_skills_passions_marquee(match):
    inner = match.group(0)
    # Extract the map part
    map_code_src = re.search(r'<div className="flex shrink-0 animate-marquee-fast pr-6 gap-6 items-stretch">\s*(.*?)\s*</div>\s*<div', inner, re.DOTALL)
    map_code_dup = re.search(r'<div className="flex shrink-0 animate-marquee-fast pr-6 gap-6 items-stretch" aria-hidden="true">\s*(.*?)\s*</div>\s*</div>', inner, re.DOTALL)
    
    if not map_code_src or not map_code_dup:
        return inner # fallback
    
    return f"""<div className="w-full pb-12 group">
          <AutoScrollContainer speed={0.8} className="snap-x snap-mandatory">
            <div className="flex shrink-0 gap-6 pr-6 items-stretch">
              {map_code_src.group(1)}
            </div>
            <div className="flex shrink-0 gap-6 pr-6 items-stretch" aria-hidden="true">
              {map_code_dup.group(1)}
            </div>
          </AutoScrollContainer>
        </div>"""

content = re.sub(r'<div className="group flex overflow-hidden w-full pb-12">.*?</div>\s*</div>\s*</div>', replace_skills_passions_marquee, content, flags=re.DOTALL)

with open("app/page.tsx", "w") as f:
    f.write(content)

print("done script")
