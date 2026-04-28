import re

with open("app/page.tsx", "r") as f:
    content = f.read()

if '"use client"' not in content:
    content = '"use client";\n' + content

auto_scroll_component = """
import React, { useEffect, useRef } from "react";

const AutoScroll = ({ children, speed = 1 }: { children: React.ReactNode; speed?: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      // Calculate progress based on frame timing to be smooth
      const delta = time - lastTime;
      lastTime = time;
      
      if (container && content) {
        // Apply speed per millisecond to keep it frame-rate independent
        const amount = speed * (delta / 16.66);
        container.scrollLeft += amount;
        
        const halfWidth = content.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        } else if (container.scrollLeft <= 0 && speed < 0) {
          // If speed is negative or user scrolled backward past 0
          container.scrollLeft += halfWidth;
        } else if (container.scrollLeft <= 0) {
            // handle sudden manual jumps to exactly 0
            // but carefully so we don't trap the user
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  return (
    <div 
      ref={containerRef}
      className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <div ref={contentRef} className="flex shrink-0 w-max">
        {children}
        {children}
      </div>
    </div>
  );
};
"""

# Inject before ProjectsTrack
if "const AutoScroll =" not in content:
    content = content.replace('const ProjectsTrack = () => (', auto_scroll_component + '\nconst ProjectsTrack = () => (')

# Now replace the static DOM structures for the 3 sections

# 1. Projects Section
projects_regex = r'<div className="group flex overflow-hidden w-full pb-16">.*?</div>\s*</div>'
projects_replacement = r"""<div className="w-full pb-16">
          <AutoScroll speed={0.5}>
            <div className="flex shrink-0 pr-8 gap-8 items-stretch pt-4 pb-8">
              <ProjectsTrack />
            </div>
          </AutoScroll>
        </div>"""
content = re.sub(projects_regex, projects_replacement, content, flags=re.DOTALL)

# 2. Skills Section
skillsList_regex = r'<div className="group flex overflow-hidden w-full pb-12">\s*<div className="flex shrink-0 animate-marquee-fast pr-6 gap-6 items-stretch">.*?((?:{[\s\S]*?}){2})\s*</div>\s*</div>'
# Skills and passions replacements are trickier using regex due to arbitrary depth
