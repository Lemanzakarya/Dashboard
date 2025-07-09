const UserTable = ({ users }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-[#1E293B] text-white">
          <tr>
            <th className="text-left px-6 py-3 font-medium">Name</th>
            <th className="text-left px-6 py-3 font-medium">Designation</th>
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
    </div>
  );
};

export default UserTable;
