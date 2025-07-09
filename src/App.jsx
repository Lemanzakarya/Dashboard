import { useState } from "react";
import { Sun, Moon, Users, GitBranch } from "lucide-react";
import UserListPage from "./pages/UserListPage";
import FlowPage from "./pages/FlowPage";
import Sidebar from "./components/Sidebar";
import NotificationBell from "./components/NotificationBell";
import useFakeNotification from "./hooks/useFakeNotification";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("users");
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
      <div className="flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 p-3 md:p-6 w-full lg:w-auto">
          <header className="mb-4">
            <div className="flex justify-between items-center border-b pb-4">
              {/* Mobile Menu Button */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors lg:hidden"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <div className="flex items-center gap-3">
                  {currentPage === "users" && (
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                      <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                  {currentPage === "flow" && (
                    <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                      <GitBranch className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                  )}
                  <div>
                    <h1 className="text-lg md:text-xl font-semibold">
                      {getPageTitle()}
                    </h1>
                    {currentPage === "users" && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Manage and organize your users effectively
                      </p>
                    )}
                    {currentPage === "flow" && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Visualize and manage your process workflows
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {darkMode ? (
                    <Sun
                      size={18}
                      className="text-gray-600 dark:text-gray-300"
                    />
                  ) : (
                    <Moon
                      size={18}
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
