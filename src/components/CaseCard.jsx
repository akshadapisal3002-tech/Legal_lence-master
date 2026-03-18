export default function CaseCard({ data, onClick }) {
  const priorityColor = {
    High: "text-red-400",
    Medium: "text-yellow-400",
    Low: "text-green-400",
  };

  return (
    <div
      onClick={onClick}
      className="p-4 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700"
    >
      <p className="text-xs text-indigo-400 font-bold">{data.id}</p>
      <h3 className="font-semibold">{data.title}</h3>
      <p className="text-xs text-slate-400">{data.description}</p>
      <p className={`text-xs mt-2 ${priorityColor[data.priority]}`}>{data.priority}</p>
    </div>
  );
}