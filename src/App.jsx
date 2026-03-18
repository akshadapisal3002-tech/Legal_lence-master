import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Import your Sidebar
import LegalLensDashboard from "./pages/LegalLensDashboard";
import CasesPage from "./pages/CasesPage";
import CaseDetails from "./components/CaseDetails";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen w-full bg-slate-950 overflow-hidden">
        <Sidebar /> {/* Sidebar stays visible on all pages */}
        
        <div className="flex-1 overflow-y-auto dashboard-bg">
          <Routes>
            <Route path="/create-case" element={<CreatePage />} />
            <Route path="/" element={<LegalLensDashboard />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/cases/:caseId" element={<CaseDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;