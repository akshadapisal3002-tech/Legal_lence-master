export default function Notification({ text, time }) {
  return (
    <div className="border-b border-white/5 py-3 px-2 hover:bg-white/5 transition-colors rounded-md">
      
      <p className="text-sm text-slate-200">
        {text}
      </p>

      <span className="text-xs text-slate-400">
        {time}
      </span>

    </div>
  );
}