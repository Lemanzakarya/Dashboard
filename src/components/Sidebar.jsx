import { Users, Settings, GitBranch } from "lucide-react";

const Sidebar = ({ currentPage, setCurrentPage }) => {
  return (
    <aside className="w-64 h-screen bg-[#1E293B] text-white flex flex-col justify-between sticky top-0">
      <div>
        <div className="p-6 text-xl font-bold">Dashboard</div>
        <nav className="flex flex-col px-4 space-y-1">
          <button
            onClick={() => setCurrentPage("users")}
            className={`flex items-center gap-2 p-2 rounded hover:bg-slate-700 text-left transition-all duration-200 ${
              currentPage === "users" ? "bg-slate-500/20 text-slate-300" : ""
            }`}
          >
            <Users size={18} /> Users
          </button>

          <button
            onClick={() => setCurrentPage("flow")}
            className={`flex items-center gap-2 p-2 rounded hover:bg-slate-700 text-left transition-all duration-200 ${
              currentPage === "flow" ? "bg-slate-500/20 text-slate-300" : ""
            }`}
          >
            <GitBranch size={18} /> Process Flow
          </button>
        </nav>
      </div>

      {/* Alt kısımda şirket bilgisi */}
      <div className="p-4 border-t border-slate-600">
        <div className="text-sm text-slate-400 text-left">
          Antalya Bilişim Teknoloji
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
