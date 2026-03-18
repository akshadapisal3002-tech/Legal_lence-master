// src/components/CaseDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CaseTabs from "./CaseTabs";
import TimelineTab from "./TimelineTab";
import MembersTab from "./MembersTab";
import FilesTab from "./FilesTab";

export default function CaseDetails() {
  const { caseId } = useParams();
  const navigate = useNavigate();

  const tabs = [
    { label: "Timeline", content: <TimelineTab /> },
    { label: "Members", content: <MembersTab /> },
    { label: "Files", content: <FilesTab /> },
  ];

  return (
    <div className="p-10 text-white animate-in fade-in duration-500">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-6"
      >
        <ArrowLeft size={18} /> Back to Dashboard
      </button>

      <div className="glass-card p-8 border border-white/10 bg-slate-900/50 rounded-2xl">
        {/* Case header */}
        <h1 className="text-3xl font-bold mb-2">Case Investigation</h1>
        <p className="text-slate-400 mb-6">
          Viewing details for Reference:{" "}
          <span className="text-indigo-400 font-mono">{caseId}</span>
        </p>

        {/* Status & Assigned cards */}
        <div className="mt-6 grid grid-cols-2 gap-8">
          <div className="p-4 bg-white/5 rounded-xl">
            <h4 className="text-xs font-bold uppercase text-slate-500 mb-1">Status</h4>
            <p className="text-emerald-400">Under Investigation</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <h4 className="text-xs font-bold uppercase text-slate-500 mb-1">Assigned To</h4>
            <p>Detective John</p>
          </div>
        </div>

        {/* Tabs section */}
        <CaseTabs tabs={tabs} />
      </div>
    </div>
  );
}
{/*import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CaseTabs from "./CaseTabs";
import TimelineTab from "./TimelineTab";
import MembersTab from "./MembersTab";
import FilesTab from "./FilesTab";

export default function CaseDetails() {
  const { caseId } = useParams();
  const navigate = useNavigate();
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    // Example: fetch case details from backend API
    fetch(`/api/cases/${caseId}`)
      .then((res) => res.json())
      .then((data) => setCaseData(data));
  }, [caseId]);

  if (!caseData) return <p className="text-white p-10">Loading...</p>;

  const tabs = [
    { label: "Timeline", content: <TimelineTab timeline={caseData.timeline} /> },
    { label: "Members", content: <MembersTab members={caseData.assignedTo} /> },
    { label: "Files", content: <FilesTab files={caseData.files} /> },
  ];

  return (
    <div className="p-10 text-white animate-in fade-in duration-500">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-6"
      >
        <ArrowLeft size={18} /> Back to Dashboard
      </button>

      <div className="glass-card p-8 border border-white/10 bg-slate-900/50 rounded-2xl">
        <h1 className="text-3xl font-bold mb-2">Case Investigation</h1>
        <p className="text-slate-400 mb-6">
          Viewing details for Reference:{" "}
          <span className="text-indigo-400 font-mono">{caseData.id}</span>
        </p>

        
        <div className="mt-6 grid grid-cols-2 gap-8">
          <div className="p-4 bg-white/5 rounded-xl">
            <h4 className="text-xs font-bold uppercase text-slate-500 mb-1">Status</h4>
            <p className="text-emerald-400">{caseData.status}</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <h4 className="text-xs font-bold uppercase text-slate-500 mb-1">Assigned To</h4>
            <p>{caseData.assignedTo.map((m) => m.name).join(", ")}</p>
          </div>
        </div>

       
        <CaseTabs tabs={tabs} />
      </div>
    </div>
  );
} */}