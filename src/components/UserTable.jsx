const UserTable = ({ users }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-x-auto">
      {/* Desktop Table */}
      <table className="min-w-full text-sm hidden md:table">
        <thead className="bg-[#1E293B] dark:bg-gray-700 text-white">
          <tr>
            <th className="text-left px-6 py-3 font-medium">Name</th>
            <th className="text-left px-6 py-3 font-medium">Role</th>
            <th className="text-left px-6 py-3 font-medium">Email</th>
            <th className="text-left px-6 py-3 font-medium">Phone No.</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t dark:border-gray-600 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <td className="px-6 py-3 font-medium">
                {user.firstName} {user.lastName}
              </td>
              <td className="px-6 py-3">{user.company?.title || "—"}</td>
              <td className="px-6 py-3">{user.email}</td>
              <td className="px-6 py-3">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Card Layout */}
      <div className="md:hidden divide-y divide-gray-200 dark:divide-gray-600">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-lg text-gray-900 dark:text-white">
                  {user.firstName} {user.lastName}
                </h3>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">Role:</span>{" "}
                {user.company?.title || "—"}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">Email:</span> {user.email}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">Phone:</span> {user.phone}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTable;
