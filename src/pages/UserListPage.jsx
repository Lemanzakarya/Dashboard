import { Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { useUsers } from "../hooks/useUsers";
import UserTable from "../components/UserTable";

export default function UserListPage() {
  const {
    users,
    query,
    sortAsc,
    page,
    totalPages,
    handleSearch,
    handleSort,
    nextPage,
    prevPage,
  } = useUsers();

  return (
    <div className="p-6">
      {/* Header with Search and Actions */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search user..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="px-4 py-2 border rounded w-1/2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
        />
        <div>
          <button
            onClick={handleSort}
            className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Filter size={18} />
            {sortAsc ? "A-Z" : "Z-A"}
          </button>
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
