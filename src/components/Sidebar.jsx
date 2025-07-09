import { Users, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-[#1E293B] text-white flex flex-col justify-between">
      <div>
        <div className="p-6 text-xl font-bold">Dashboard</div>
        <nav className="flex flex-col px-4 space-y-1">
          <a
            href="#"
            className="flex items-center gap-2 p-2 rounded hover:bg-slate-700"
          >
            <Users size={18} /> Users
          </a>
          
          <a
            href="#"
            className="flex items-center gap-2 p-2 rounded hover:bg-slate-700"
          >
            <Settings size={18} /> Settings
          </a>
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
