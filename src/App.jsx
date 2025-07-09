import UserListPage from "./pages/UserListPage";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">User Management</h1>
          <span className="text-sm text-gray-500">Antalya Bilişim Teknoloji</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <UserListPage />
      </main>
    </div>
  );
}

export default App;
