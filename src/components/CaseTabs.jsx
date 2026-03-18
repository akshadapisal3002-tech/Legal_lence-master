import { useState } from "react";

export default function CaseTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="mt-8">
      {/* Tab headers */}
      <div className="flex gap-4 border-b border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`pb-2 px-3 font-semibold text-sm ${
              activeTab === tab.label
                ? "border-b-2 border-indigo-500 text-white"
                : "text-slate-400 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {tabs.map(
          (tab) => activeTab === tab.label && <div key={tab.label}>{tab.content}</div>
        )}
      </div>
    </div>
  );
}