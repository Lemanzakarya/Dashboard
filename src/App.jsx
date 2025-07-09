import { useState } from "react";
import UserListPage from "./pages/UserListPage";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-1 p-6">
          <header className="mb-6">
            <div className="flex justify-between items-center border-b pb-4">
              <h1 className="text-2xl font-bold">User Management</h1>
              <span className="text-sm text-gray-400">
                Antalya Bilişim Teknoloji
              </span>
            </div>
          </header>
          <UserListPage />
        </main>
      </div>
    </div>
  );
}

export default App;
