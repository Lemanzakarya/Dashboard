import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import UserListPage from "./pages/UserListPage";
import FlowPage from "./pages/FlowPage";
import Sidebar from "./components/Sidebar";
import NotificationBell from "./components/NotificationBell";
import useFakeNotification from "./hooks/useFakeNotification";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("users");
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useFakeNotification();

  const renderPage = () => {
    switch (currentPage) {
      case "users":
        return <UserListPage />;
      case "flow":
        return <FlowPage />;
      default:
        return <UserListPage />;
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case "users":
        return "User Management";
      case "flow":
        return "Process Flow";
      default:
        return "User Management";
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="flex-1 p-6">
          <header className="mb-4">
            <div className="flex justify-between items-center border-b pb-4">
              <h1 className="text-2xl font-bold">{getPageTitle()}</h1>

              <div className="flex items-center gap-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {darkMode ? (
                    <Sun
                      size={20}
                      className="text-gray-600 dark:text-gray-300"
                    />
                  ) : (
                    <Moon
                      size={20}
                      className="text-gray-600 dark:text-gray-300"
                    />
                  )}
                </button>
                <NotificationBell />
              </div>
            </div>
          </header>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
