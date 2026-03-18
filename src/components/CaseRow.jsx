import { useNavigate } from "react-router-dom";

export default function CaseRow({ id, title, priority }) {
  const navigate = useNavigate();
  const priorityColors = {
    High: "bg-red-500/20 text-red-400 border-red-500/30",
    Medium: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    Low: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  };

  const handleClick = () => navigate(`/cases/${id}`);

  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-between py-4 border-b border-white/5 px-2 hover:bg-white/5 transition-colors cursor-pointer`}
    >
      <div className="flex items-center gap-4">
        <span className="text-indigo-600 font-bold text-xs tracking-tighter">{id}</span>
        <span className="text-sm text-slate-200">{title}</span>
      </div>
      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${priorityColors[priority]}`}>{priority}</span>
    </div>
  );
}