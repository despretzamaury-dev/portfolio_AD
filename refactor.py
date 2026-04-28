import re

with open("app/page.tsx", "r") as f:
    content = f.read()

# 1. Projects refactoring
# Extract the LVMH, FairWay, UniSphere projects
projects_match = re.search(r'(<div className="snap-center shrink-0 w-\[90vw\].*?)\s*{/\*\s*COMPÉTENCES SECTION\s*\*/}', content, re.DOTALL)
if not projects_match:
    print("Could not find projects")
    exit(1)

projects_html = projects_match.group(1).strip()
# Remove the closing tags from projects_html which belong to the parent divs
# The match ends right before COMPÉTENCES SECTION, so we need to properly extract the children
projects_wrapper_match = re.search(r'(<div className="flex overflow-x-auto snap-x snap-mandatory gap-8[^>]*>)(.*?)(</div>\s*</section>\s*{/\*\s*COMPÉTENCES SECTION)', content, re.DOTALL)

if not projects_wrapper_match:
    print("Could not find projects wrapper")
    exit(1)

inner_projects = projects_wrapper_match.group(2).strip()

projects_component = f"""
const ProjectsTrack = () => (
  <>
    {inner_projects}
  </>
);
"""

# 2. Extract Skills list
skills_match = re.search(r'(\[\s*{\s*name: "Agent IA Dust".*?\])', content, re.DOTALL)
skills_list = skills_match.group(1) if skills_match else "[]"

# 3. Extract Passions list
passions_match = re.search(r'(\[\s*{\s*name: "Voyage".*?\])', content, re.DOTALL)
passions_list = passions_match.group(1) if passions_match else "[]"

new_content = content

# Inject components at the top
top_injection = f"""import Image from "next/image";

{projects_component}

const skillsList = {skills_list};

const passionsList = {passions_list};
"""

new_content = re.sub(r'import Image from "next/image";', top_injection, new_content)

# Replace Projects Section
projects_new = r"""        {/* Container Défilant Horizontal */}
        <div className="group flex overflow-hidden w-full pb-16">
          <div className="flex shrink-0 animate-marquee-slow pr-8 gap-8 items-stretch">
            <ProjectsTrack />
          </div>
          <div className="flex shrink-0 animate-marquee-slow pr-8 gap-8 items-stretch" aria-hidden="true">
            <ProjectsTrack />
          </div>
        </div>"""
new_content = re.sub(r'<div className="flex overflow-x-auto snap-x snap-mandatory gap-8.*?</div>\s*</section>', projects_new + '\n      </section>', new_content, flags=re.DOTALL)

# Replace Skills Section
skills_new = r"""        {/* Container Défilant Horizontal pour les compétences */}
        <div className="group flex overflow-hidden w-full pb-12">
          <div className="flex shrink-0 animate-marquee-fast pr-6 gap-6 items-stretch">
            {skillsList.map((skill, index) => (
              <div key={index} className="snap-center shrink-0 w-64 md:w-72 bg-black/40 backdrop-blur-md rounded-2xl shadow-sm border border-white/20 p-6 flex items-center gap-5 transform transition-all hover:bg-black/60 hover:-translate-y-1 hover:border-white/40 cursor-default">
                <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {skill.icon}
                  </svg>
                </div>
                <h3 className="text-white font-medium tracking-widest uppercase text-[11px] md:text-sm leading-tight">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee-fast pr-6 gap-6 items-stretch" aria-hidden="true">
            {skillsList.map((skill, index) => (
              <div key={`dup-${index}`} className="snap-center shrink-0 w-64 md:w-72 bg-black/40 backdrop-blur-md rounded-2xl shadow-sm border border-white/20 p-6 flex items-center gap-5 transform transition-all hover:bg-black/60 hover:-translate-y-1 hover:border-white/40 cursor-default">
                <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {skill.icon}
                  </svg>
                </div>
                <h3 className="text-white font-medium tracking-widest uppercase text-[11px] md:text-sm leading-tight">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>"""
new_content = re.sub(r'<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-16 lg:px-32 pb-12.*?</div>\s*</section>', skills_new + '\n      </section>', new_content, flags=re.DOTALL)

# Replace Passions Section
passions_new = r"""        {/* Container Défilant Horizontal pour les Passions */}
        <div className="group flex overflow-hidden w-full pb-12">
          <div className="flex shrink-0 animate-marquee-fast pr-6 gap-6 items-stretch">
            {passionsList.map((passion, index) => (
              <div key={index} className="snap-center shrink-0 w-64 md:w-72 bg-black/40 backdrop-blur-md rounded-2xl shadow-sm border border-white/20 p-6 flex items-center gap-5 transform transition-all hover:bg-black/60 hover:-translate-y-1 hover:border-white/40 cursor-default">
                <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {passion.icon}
                  </svg>
                </div>
                <h3 className="text-white font-medium tracking-widest uppercase text-sm leading-tight">
                  {passion.name}
                </h3>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee-fast pr-6 gap-6 items-stretch" aria-hidden="true">
            {passionsList.map((passion, index) => (
              <div key={`dup-${index}`} className="snap-center shrink-0 w-64 md:w-72 bg-black/40 backdrop-blur-md rounded-2xl shadow-sm border border-white/20 p-6 flex items-center gap-5 transform transition-all hover:bg-black/60 hover:-translate-y-1 hover:border-white/40 cursor-default">
                <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {passion.icon}
                  </svg>
                </div>
                <h3 className="text-white font-medium tracking-widest uppercase text-sm leading-tight">
                  {passion.name}
                </h3>
              </div>
            ))}
          </div>
        </div>"""
new_content = re.sub(r'<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-16 lg:px-32 pb-12.*?</div>\s*</section>', passions_new + '\n      </section>', new_content, flags=re.DOTALL)

with open("app/page.tsx", "w") as f:
    f.write(new_content)

print("Done")
