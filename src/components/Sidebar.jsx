// src/components/Sidebar.jsx
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Folder, FileText, Settings, User, LogOut } from "lucide-react";
import NavItem from "./NavItem";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-slate-900 text-white p-6 flex flex-col border-r border-white/5">
      {/* BRANDING - This is the ONLY place LEGALLENS should stay */}
      <div className="mb-10 px-2 flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">🔎</span>
        </div>
        
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        <NavItem 
          icon={<Home size={18}/>} 
          label="Home" 
          active={location.pathname === "/"}
          onClick={() => navigate("/")} 
        />
        <NavItem 
          icon={<Folder size={18}/>} 
          label="Cases" 
          active={location.pathname.startsWith("/cases")}
          onClick={() => navigate("/cases")} 
        />
        <NavItem icon={<FileText size={18}/>} label="Audit Log" />
        <NavItem icon={<Settings size={18}/>} label="Settings" />
      </nav>

      <div className="pt-6 border-t border-white/5">
        <NavItem icon={<LogOut size={18}/>} label="Log Out" />
      </div>
    </div>
  );
}