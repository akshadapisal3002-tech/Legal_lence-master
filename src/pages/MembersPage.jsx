// src/pages/MembersPage.jsx
import React from "react";
import {
  Search,
  Filter,
  UserPlus,
  Mail,
  MapPin, // Icon for Region
  AlertTriangle,
  MoreHorizontal,
  ChevronDown
} from "lucide-react";

// Updated mock data with 'region' based on your request
const membersData = [
  { id: 1, name: "Akshada", email: "akshada...@gmail.com", status: "Active", region: "Pune" },
  { id: 2, name: "Revathi", email: "revathi...@gmail.com", status: "Active", region: "Mumbai" },
  { id: 3, name: "Tanaya", email: "tanaya...@gmail.com", status: "Inactive", region: "Nagpur" },
  { id: 4, name: "Bantu", email: "bantu...@gmail.com", status: "Active", region: "Pune" },
  { id: 5, name: "Pungi", email: "pungi...@gmail.com", status: "Active", region: "Nashik" },
];

export default function MembersPage() {
  return (
    <div className="flex-1 min-w-0 bg-[#0b1120] p-8 text-slate-300 font-sans overflow-x-hidden">
      
      {/* HEADER */}
      <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Add/View Members</h1>
          <p className="text-slate-500 mt-2 text-base">
            Manage investigator and admin access across regions.
          </p>
        </div>

        <button className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-900/30 transition-all active:scale-95 whitespace-nowrap">
          <UserPlus size={20} />
          Add Member
        </button>
      </header>

      {/* SEARCH + FILTER */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-6 p-4 bg-[#151c2c] border border-slate-800 rounded-xl shadow-sm">
        
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-4 top-3.5 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="Search members or regions..."
            className="w-full bg-[#0f172a] border border-slate-800 rounded-lg py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>

        <div className="relative min-w-[180px]">
          <select className="w-full appearance-none bg-[#0f172a] border border-slate-800 rounded-lg pl-10 pr-10 py-3 text-sm text-slate-400 focus:outline-none cursor-pointer">
            <option>All Regions</option>
            <option>Pune</option>
            <option>Mumbai</option>
            <option>Nagpur</option>
          </select>
          <MapPin className="absolute left-4 top-3.5 text-slate-500" size={16} />
          <ChevronDown className="absolute right-4 top-3.5 text-slate-500 pointer-events-none" size={16} />
        </div>
      </div>

      {/* TABLE WITH REGION COLUMN */}
      <div className="bg-[#151c2c] border border-slate-800 rounded-xl overflow-x-auto shadow-2xl">
        <table className="w-full text-left border-collapse">
          
          <thead className="bg-slate-800/30 text-xs uppercase tracking-widest text-slate-500 border-b border-slate-800">
            <tr>
              <th className="px-8 py-5">Names</th>
              <th className="px-8 py-5">Email</th>
              <th className="px-8 py-5">Status</th>
              <th className="px-8 py-5">Region</th> {/* New Column */}
              <th className="px-8 py-5 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800 text-sm font-medium">
            {membersData.map((member) => (
              <tr key={member.id} className="hover:bg-slate-800/20 transition-colors group">

                {/* NAME */}
                <td className="px-8 py-5 whitespace-nowrap">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs border border-white/5 text-slate-400 group-hover:border-blue-500/50 transition-all">
                      {member.name.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="font-semibold">{member.name}</span>
                  </div>
                </td>

                {/* EMAIL */}
                <td className="px-8 py-5 text-slate-400 whitespace-nowrap">
                  <div className="flex items-center gap-2.5">
                    <Mail size={16} className="text-slate-600" />
                    {member.email}
                  </div>
                </td>

                {/* STATUS */}
                <td className="px-8 py-5 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-2 border ${
                      member.status === "Active"
                        ? "bg-green-500/10 text-green-400 border-green-500/20"
                        : "bg-red-500/10 text-red-400 border-red-500/20"
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${member.status === 'Active' ? 'bg-green-400' : 'bg-red-400'}`} />
                    {member.status === "Inactive" && <AlertTriangle size={14} />}
                    {member.status}
                  </span>
                </td>

                {/* REGION COLUMN */}
                <td className="px-8 py-5 text-slate-300 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-blue-500" />
                    {member.region}
                  </div>
                </td>

                {/* ACTION */}
                <td className="px-8 py-5 text-center whitespace-nowrap">
                  <button className="p-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-700 hover:text-white text-slate-500 transition-all">
                    <MoreHorizontal size={18} />
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}