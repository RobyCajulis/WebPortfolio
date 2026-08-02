import Gsw from "../assets/gsw.png";
import Ff from "../assets/Ff.jpg";
import Foodie from "../assets/Foodie.png";

function Project() {
  return (
    <>
      <div className="min-h-screen bg-gray-950 px-6">
        
        <div className="grid max-w-[1050px] gap-10 ml-6 md:ml-73 pr-8 pt-25">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Projects
          </h1>

          
          <div className="flex flex-col gap-10 md:ml-8 md:max-w-[950px]">

           
            <div className="flex h-[200px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1320] transition-colors hover:border-white/[0.22] max-sm:h-auto max-sm:flex-col">
              <div className="flex h-full flex-[0_0_35%] items-center justify-center overflow-hidden border-r border-white/[0.08] bg-gradient-to-br from-[#6d8bff]/[0.16] to-[#6d8bff]/[0.02] p-6 max-sm:h-36 max-sm:flex-none max-sm:border-b max-sm:border-r-0">
                <img
                  src={Foodie}
                  alt="Foodie"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col justify-center px-6 py-4">
                <h3 className="mb-1 text-lg font-semibold text-[#f2f4f8]">
                  Foodie
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-[#7b8aa3]">
                  Hybrid Mobile Food Ordering App with Social Media Features, Browse, Post, and Order.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs text-[#cbd5e1]">
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.06] px-2.5 py-1 transition-colors hover:bg-white/[0.12]">ReactJS</span>
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.06] px-2.5 py-1 transition-colors hover:bg-white/[0.12]">Kotlin</span>
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.06] px-2.5 py-1 transition-colors hover:bg-white/[0.12]">CSS</span>
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.06] px-2.5 py-1 transition-colors hover:bg-white/[0.12]">Supabase</span>
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.06] px-2.5 py-1 transition-colors hover:bg-white/[0.12]">Firebase</span>
                </div>
              </div>
            </div>

            
            <div className="flex h-[200px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1320] transition-colors hover:border-white/[0.22] max-sm:h-auto max-sm:flex-col">
              <div className="flex h-full flex-[0_0_35%] items-center justify-center overflow-hidden border-r border-white/[0.08] bg-gradient-to-br from-[#6d8bff]/[0.16] to-[#6d8bff]/[0.02] p-6 max-sm:h-36 max-sm:flex-none max-sm:border-b max-sm:border-r-0">
                <img
                  src={Ff}
                  alt="ScholarHub Fund"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col justify-center px-6 py-4">
                <h3 className="mb-1 text-lg font-semibold text-[#f2f4f8]">
                  ScholarHub Fund
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-[#7b8aa3]">
                  Donation Application for Scholars and Donators.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs text-[#cbd5e1]">
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.06] px-2.5 py-1 transition-colors hover:bg-white/[0.12]">Figma</span>
                </div>
              </div>
            </div>

            
            <div className="flex h-[200px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1320] transition-colors hover:border-white/[0.22] max-sm:h-auto max-sm:flex-col">
              <div className="flex mh-full flex-[0_0_35%] items-center justify-center overflow-hidden border-r border-white/[0.08] bg-gradient-to-br from-[#6d8bff]/[0.16] to-[#6d8bff]/[0.02] p-6 max-sm:h-36 max-sm:flex-none max-sm:border-b max-sm:border-r-0">
                <img
                  src={Gsw}
                  alt="GoSaveWeb"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col justify-center px-6 py-4">
                <h3 className="mb-1 text-lg font-semibold text-[#f2f4f8]">
                  GoSaveWeb
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-[#7b8aa3]">
                  Website for Osave Store.
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-xs text-[#cbd5e1]">
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.06] px-2.5 py-1 transition-colors hover:bg-white/[0.12]">Wordpress</span>
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.06] px-2.5 py-1 transition-colors hover:bg-white/[0.12]">Elementor</span>
                  <span className="rounded-md border border-white/[0.08] bg-white/[0.06] px-2.5 py-1 transition-colors hover:bg-white/[0.12]">MySQL</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Project;