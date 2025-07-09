import { Users, Sun, Moon } from "lucide-react";

const Sidebar = ({ darkMode, toggleDarkMode }) => {
  return (
    <aside className="w-64 min-h-screen bg-[#1E293B] text-white flex flex-col">
      <div className="p-6 text-xl font-bold">Dashboard</div>
      <nav className="flex flex-col px-4">
        <a
          href="#"
          className="flex items-center gap-2 p-2 rounded hover:bg-slate-700"
        >
          <Users size={18} /> Users
        </a>

      </nav>

      <div className="px-4 py-2 mt-4 border-t border-slate-600">
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-2 p-2 rounded hover:bg-slate-700 w-full text-left"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          <span className="text-sm">Theme</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
