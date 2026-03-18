// src/pages/LegalLensDashboard.jsx
import StatCard from "../components/StatCard"
import CaseRow from "../components/CaseRow"
import Notification from "../components/Notification"
import { Plus, FolderOpen, Bell, Search } from "lucide-react"
import { useNavigate } from "react-router-dom";
export default function LegalLensDashboard() {
  const navigate = useNavigate();
  return (
    // We remove the <Sidebar /> from here because it's now in App.jsx
    <div className="flex-1 overflow-y-auto dashboard-bg min-h-screen text-slate-200 p-8 custom-scrollbar">
      
      {/* 1. TOP HEADER - Refined for better alignment */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            <span className="text-indigo-500">LEGALLENS</span> Dashboard
          </h1>
          <p className="text-slate-400 text-sm mt-1 font-medium">
            Welcome back, <span className="text-indigo-400">Lead Investicator</span> • System status: Optimal
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Search Bar - Matches the screenshot aesthetic */}
          <div className="relative hidden xl:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Search cases..." 
              className="bg-slate-900/50 border border-white/5 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-indigo-500 transition-all w-64"
            />
          </div>
          
          <button className="relative p-2 bg-slate-800/50 rounded-full border border-white/5 hover:bg-slate-800 transition-all">
            <Bell size={20} className="text-slate-400" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-indigo-500 rounded-full border-2 border-slate-900"></span>
          </button>

          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 border-2 border-white/10 cursor-pointer shadow-lg"></div>
        </div>
      </header>

      {/* 2. STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Cases" value="42" type="total" />
        <StatCard title="Active Cases" value="18" type="active" />
        <StatCard title="Closed Cases" value="24" type="closed" />
        <StatCard title="High Priority" value="08" type="priority" />
      </div>

      {/* 3. MIDDLE SECTION - Recent vs Assigned */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        
        {/* Recent Cases */}
        <section className="glass-card p-6 border border-white/5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-white tracking-wide">Recent Cases</h2>
            <button className="text-[11px] font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors">
              View All ›
            </button>
          </div>
          <div className="space-y-1">
            <CaseRow id="CI-104" title="Cyber Crime" priority="Medium" status="Active" />
            <CaseRow id="CI-105" title="Robbery Case" priority="Low" status="New" />
            <CaseRow id="CI-108" title="Missing Person" priority="High" status="Active" />
          </div>
        </section>

        {/* My Assigned Cases */}
        <section className="glass-card p-6 border border-white/5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-white tracking-wide">My Assigned Cases</h2>
            <button className="text-[11px] font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors">
              View All ›
            </button>
          </div>
          <div className="space-y-1">
            <CaseRow id="CI-102" title="Bank Fraud Investigation" priority="High" status="High" />
            <CaseRow id="CI-099" title="Warehouse Theft" priority="Low" status="Closed" />
            <CaseRow id="CI-112" title="Narcotics Distribution" priority="High" status="Active" />
          </div>
        </section>
      </div>

      {/* 4. BOTTOM SECTION - Notifications & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Notifications */}
        <section className="glass-card p-6 border border-white/5">
          <h2 className="mb-6 font-bold text-white tracking-wide">System Notifications</h2>
          <div className="space-y-4">
            <Notification text="New case assigned: Warehouse Theft (CI-099)" time="10 minutes ago" />
            <Notification text="Evidence verified for case CI-102" time="30 minutes ago" />
            <Notification text="Case CI-088 status updated to 'Closed'" time="2 hours ago" />
          </div>
        </section>

        {/* Quick Actions */}
        <section className="glass-card p-6 border border-white/5">
          <h2 className="mb-6 font-bold text-white tracking-wide">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
  onClick={() => navigate("/create-case")}
  className="group flex items-center justify-center gap-3 bg-indigo-600 text-white p-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/10 font-bold text-sm"
>
  <Plus size={18} className="group-hover:rotate-90 transition-transform" /> 
  Create New Case
</button>

            <button className="flex items-center justify-center gap-3 bg-slate-800/60 text-slate-300 p-4 rounded-xl border border-white/5 hover:bg-slate-700/80 transition-all font-bold text-sm">
              <FolderOpen size={18} /> 
              View Archives
            </button>
          </div>
        </section>

      </div>
    </div>
  )
}