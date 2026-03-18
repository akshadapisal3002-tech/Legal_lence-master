import React from "react";
import { 
  Upload, X, Calendar, ChevronDown, 
  Search, Filter 
} from "lucide-react";

function CreatePage() {
  return (
    /* flex-1 ensures this container takes up all space next to your sidebar */
    <div className="flex-1 w-full min-h-screen bg-[#0b1120] p-10 text-slate-300 font-sans">
      
      {/* Removed mx-auto to prevent centering and allow full-width expansion */}
      <div className="w-full">
        <header className="mb-10">
          <h1 className="text-4xl font-semibold text-white">Create New Case</h1>
          <p className="text-slate-500 mt-2 text-base">Enter case details and assign the team.</p>
        </header>

        <div className="space-y-8">
          {/* Section: Case Details */}
          <section className="bg-[#151c2c] border border-slate-800/60 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-slate-800/30 px-8 py-4 border-b border-slate-800/60 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Case Details</h2>
            </div>
            
            {/* Increased gap-x to 24 to utilize the wide screen space */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Case Title</label>
                <input type="text" placeholder="Bank Robbery" className="w-full bg-[#0f172a] border border-slate-800 rounded-lg p-3.5 focus:outline-none focus:border-blue-500 transition-all" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Crime Location</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-[#0f172a] border border-slate-800 rounded-lg p-3.5 focus:outline-none cursor-pointer">
                    <option>Pune</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4.5 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Date of Crime</label>
                <div className="relative">
                   <input type="text" placeholder="12/03/2026" className="w-full bg-[#0f172a] border border-slate-800 rounded-lg p-3.5 focus:outline-none" />
                   <Calendar className="absolute right-4 top-4.5 w-4 h-4 text-slate-500" />
                </div>
              </div>

              {/* Spacer for alignment if needed, or leave empty */}
              <div className="hidden md:block"></div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-slate-400">Description</label>
                <textarea rows="4" className="w-full bg-[#0f172a] border border-slate-800 rounded-lg p-4 focus:outline-none focus:border-blue-500 transition-all" placeholder="Suspects robbed the bank vault and escaped with cash." />
              </div>
            </div>
          </section>

          {/* Section: Assignment */}
          <section className="bg-[#151c2c] border border-slate-800/60 rounded-xl overflow-hidden shadow-xl">
             <div className="bg-slate-800/30 px-8 py-4 border-b border-slate-800/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Assignment</h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                  <input type="text" placeholder="Search team..." className="bg-[#0f172a] border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 w-72" />
                </div>
                <button className="p-2 bg-[#0f172a] border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors text-slate-400">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Assigned Leader</label>
                <select className="w-full bg-[#0f172a] border border-slate-800 rounded-lg p-3.5 focus:outline-none">
                  <option>Detective John</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Team Members</label>
                <div className="flex flex-wrap gap-3 bg-[#0f172a] border border-slate-800 rounded-lg p-3 min-h-[58px]">
                  <span className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/40 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium">
                    Officer Mike <X className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
                  </span>
                  <span className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/40 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium">
                    Officer Sarah <X className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Case Settings */}
          <section className="bg-[#151c2c] border border-slate-800/60 rounded-xl overflow-hidden shadow-xl">
            <div className="bg-slate-800/30 px-8 py-4 border-b border-slate-800/60 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Case Settings</h2>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Priority</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-[#0f172a] border border-slate-800 rounded-lg p-3.5 focus:outline-none">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4.5 w-4 h-4 text-slate-500" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Case Status</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-[#0f172a] border border-slate-800 rounded-lg p-3.5 focus:outline-none">
                    <option>Open</option>
                    <option>Closed</option>
                    <option>In Progress</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4.5 w-4 h-4 text-slate-500" />
                </div>
              </div>
            </div>
          </section>

          {/* Footer Actions */}
          <div className="flex justify-end gap-6 py-12">
            <button className="px-12 py-3 rounded-lg bg-[#1e293b] text-white font-semibold hover:bg-slate-700 transition-all border border-slate-700">
              Cancel
            </button>
            <button className="px-12 py-3 rounded-lg bg-[#2563eb] text-white font-semibold hover:bg-blue-500 shadow-lg shadow-blue-900/30 transition-all active:scale-95">
              Create Case
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;