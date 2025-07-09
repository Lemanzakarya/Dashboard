import { ChevronLeft, ChevronRight, Search, ArrowUpDown } from "lucide-react";
import { useUsers } from "../hooks/useUsers";
import UserTable from "../components/UserTable";

export default function UserListPage() {
  const {
    users,
    query,
    sortField,
    sortAsc,
    page,
    totalPages,
    handleSearch,
    handleSort,
    nextPage,
    prevPage,
  } = useUsers();

  return (
    <div className="p-2">
      {/* Search and Sort Section */}
      <div className="mb-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          {/* Search */}
          <div className="relative flex-shrink-0">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full md:w-80 pl-10 pr-4 py-2 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Sort Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleSort("firstName")}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                sortField === "firstName"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 hover:bg-orange-100 dark:hover:bg-gray-600"
              }`}
            >
              <ArrowUpDown size={14} />
              Name {sortField === "firstName" && (sortAsc ? "↑" : "↓")}
            </button>

            <button
              onClick={() => handleSort("email")}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                sortField === "email"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 hover:bg-orange-100 dark:hover:bg-gray-600"
              }`}
            >
              <ArrowUpDown size={14} />
              Email {sortField === "email" && (sortAsc ? "↑" : "↓")}
            </button>

            <button
              onClick={() => handleSort("Designation")}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                sortField === "Designation"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 hover:bg-orange-100 dark:hover:bg-gray-600"
              }`}
            >
              <ArrowUpDown size={14} />
              Designation {sortField === "Designation" && (sortAsc ? "↑" : "↓")}
            </button>
          </div>
        </div>
      </div>

      {/* User Table */}
      <UserTable users={users} />

      {/* Pagination */}
      <div className="flex justify-end mt-4 gap-2">
        <button
          onClick={prevPage}
          disabled={page === 0}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft />
        </button>
        <span className="flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-400">
          Page {page + 1} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={page >= totalPages - 1}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
