import { ChevronLeft, ChevronRight, Search, ArrowUpDown, Users } from "lucide-react";
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
    <div>
      {/* Search and Sort Section */}
      <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-gray-400"
            />
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center mr-2">
            Sort by:
          </span>
          <button
            onClick={() => handleSort("firstName")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm transition-colors ${
              sortField === "firstName"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
            }`}
          >
            <ArrowUpDown size={12} />
            Name {sortField === "firstName" && (sortAsc ? "↑" : "↓")}
          </button>

          <button
            onClick={() => handleSort("email")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm transition-colors ${
              sortField === "email"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
            }`}
          >
            <ArrowUpDown size={12} />
            Email {sortField === "email" && (sortAsc ? "↑" : "↓")}
          </button>

          <button
            onClick={() => handleSort("company")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm transition-colors ${
              sortField === "company"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
            }`}
          >
            <ArrowUpDown size={12} />
            Role {sortField === "company" && (sortAsc ? "↑" : "↓")}
          </button>
        </div>
      </div>

      {/* User Table */}
      <UserTable users={users} />

      {/* Pagination */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Showing {page * 20 + 1} to {Math.min((page + 1) * 20, users.length)} of {users.length} users
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={prevPage}
            disabled={page === 0}
            className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium transition-colors"
          >
            <ChevronLeft size={16} />
            Previous
          </button>
          
          <span className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-lg">
            Page {page + 1} of {totalPages}
          </span>
          
          <button
            onClick={nextPage}
            disabled={page >= totalPages - 1}
            className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium transition-colors"
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
