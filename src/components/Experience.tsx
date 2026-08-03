import { useState } from "react";

function Experience() {
  const [active, setActive] = useState(true);

  return (
    <>
    <div className="min-h-screen bg-gray-950 px-6 overflow-hidden">
    <div className="items-start max-w-7xl md:ml-40 md:ps-40">

        <div className="text-white font-bold tracking-tight">
            <h1 className="text-4xl font-bold tracking-tight pt-30">Work Experience</h1>
            <h1 className="text-xl font-bold tracking-tight pt-5 text-gray-400">My Working Experience and the Company I worked with.</h1>
        </div>

        <div className="my-10 mr-10 flex flex-col md:flex-row bg-white/[0.03] border rounded-2xl border-white/10 overflow-hidden">

            <div className="md:w-64 md:border-r border-white/10">
                <button
                    onClick={() => setActive(true)}
                    className={
                        "block w-full text-left px-5 py-4 border-l-2 transition-colors " +
                        (active ? "bg-white/[0.06] border-l-blue-500" : "border-l-transparent hover:bg-white/[0.03]")
                    }
                >
                    <h3 className="text-sm font-semibold text-white">Low Code / No Code</h3>
                    <h4 className="text-xs font-mono text-gray-500 mt-1">2022-2026</h4>
                </button>
            </div>

            <div className="flex-1 px-6 py-8">

                <div className="flex justify-between items-baseline flex-wrap gap-2 text-white">

                    <div>
                        <h3 className="text-base font-semibold tracking-tight">Low Code / No Code</h3>
                        <h4 className="text-sm text-gray-400 mt-0.5">Xentra Infotech Solutions INC.</h4>
                    </div>

                    <div className="text-right">
                        <h3 className="text-base font-medium font-mono text-blue-400">2022-2026</h3>
                    </div>
                </div>

                <p className="mt-2 text-sm text-gray-400 wrap-break-word leading-relaxed">During my OJT at Xentra Infotech Solutions, I dove deep into enterprise application development using the
                    Decisions low-code/no-code platform. I successfully achieved the Decisions Fundamentals Certification and fast-tracked my way through advanced backend and
                    frontend training modules. From designing intuitive user interfaces and dashboards to mapping complex conditional logic, truth tables, and API integrations in
                    the workflow engine, this experience allowed me to bridge the gap between visual development and robust software architecture.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-md bg-blue-500/10 px-2.5 py-1 font-mono text-xs text-blue-400">Decisions</span>
                    <span className="rounded-md bg-blue-500/10 px-2.5 py-1 font-mono text-xs text-blue-400">Workflow Automation</span>
                    <span className="rounded-md bg-blue-500/10 px-2.5 py-1 font-mono text-xs text-blue-400">API Integration</span>
                </div>

            </div>
        </div>
    </div>
    </div>
    </>
)
}


export default Experience;
