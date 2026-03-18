// src/components/NavItem.jsx
import React from "react";

export default function NavItem({ icon, label, active, onClick }) {
  return (
    <div 
      onClick={onClick} // This is the most important line!
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 
        ${active 
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
          : "text-slate-400 hover:bg-white/5 hover:text-white"
        }`}
    >
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </div>
  );
}