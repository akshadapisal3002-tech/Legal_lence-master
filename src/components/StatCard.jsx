// src/components/StatCard.jsx
import { Folder, Zap, CheckSquare, Flag } from "lucide-react";

export default function StatCard({ title, value, type }) {
  // Config for different card styles
  const configs = {
    total: { icon: <Folder size={20} />, color: "text-blue-400", bg: "bg-blue-400/10" },
    active: { icon: <Zap size={20} />, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    closed: { icon: <CheckSquare size={20} />, color: "text-indigo-400", bg: "bg-indigo-400/10" },
    priority: { icon: <Flag size={20} />, color: "text-red-400", bg: "bg-red-400/10" },
  };

  const { icon, color, bg } = configs[type] || configs.total;

  return (
    <div className="bg-legal-card border border-white/5 p-5 rounded-xl shadow-lg hover:border-white/10 transition-all cursor-default">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-400 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
        </div>
        <div className={`p-3 rounded-lg ${bg} ${color}`}>
          {icon}
        </div>
      </div>
      
      {/* Subtle bottom glow effect seen in screenshot */}
      <div className={`h-1 w-1/2 mt-4 rounded-full opacity-20 blur-sm ${color.replace('text', 'bg')}`}></div>
    </div>
  );
}