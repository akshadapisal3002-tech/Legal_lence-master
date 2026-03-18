// src/pages/CasesPage.jsx
import CaseRow from "../components/CaseRow";

const cases = [
  { id: "CI-104", title: "Cyber Crime", priority: "Medium" },
  { id: "CI-105", title: "Robbery Case", priority: "Low" },
  { id: "CI-108", title: "Missing Person", priority: "High" },
];

export default function CasesPage() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Cases Page</h1>
      <div className="space-y-2">
        {cases.map((c) => (
          <CaseRow key={c.id} id={c.id} title={c.title} priority={c.priority} />
        ))}
      </div>
    </div>
  );
}