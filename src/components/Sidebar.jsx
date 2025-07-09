import { Users, Settings, GitBranch, X } from "lucide-react";

const Sidebar = ({
  currentPage,
  setCurrentPage,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const handleNavClick = (page) => {
    setCurrentPage(page);
    setSidebarOpen(false); 
  };

  return (
    <aside
      className={`
      fixed lg:sticky top-0 left-0 z-50 
      w-64 h-screen bg-[#1E293B] text-white 
      flex flex-col justify-between
      transform transition-transform duration-300 ease-in-out
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
    `}
    >
      <div>
        <div className="p-6 text-xl font-bold flex items-center justify-between">
          <span>Dashboard</span>
          {/* Mobile Close Button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 rounded hover:bg-slate-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col px-4 space-y-1">
          <button
            onClick={() => handleNavClick("users")}
            className={`flex items-center gap-2 p-2 rounded hover:bg-slate-700 text-left transition-all duration-200 ${
              currentPage === "users" ? "bg-slate-500/20 text-slate-300" : ""
            }`}
          >
            <Users size={18} /> Users
          </button>

          <button
            onClick={() => handleNavClick("flow")}
            className={`flex items-center gap-2 p-2 rounded hover:bg-slate-700 text-left transition-all duration-200 ${
              currentPage === "flow" ? "bg-slate-500/20 text-slate-300" : ""
            }`}
          >
            <GitBranch size={18} /> Process Flow
          </button>
        </nav>
      </div>

      <div className="p-4 border-t border-slate-600">
        <div className="text-sm text-slate-400 text-left">
          Antalya Bilişim Teknoloji
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
