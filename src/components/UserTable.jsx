const UserTable = ({ users }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="text-left px-6 py-3">Name</th>
            <th className="text-left px-6 py-3">Designation</th>
            <th className="text-left px-6 py-3">Email</th>
            <th className="text-left px-6 py-3">Phone No.</th>
            <th className="text-left px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t hover:bg-orange-50 transition-colors duration-200"
            >
              <td className="px-6 py-3 font-medium">
                {user.firstName} {user.lastName}
              </td>
              <td className="px-6 py-3">{user.company?.title || "—"}</td>
              <td className="px-6 py-3">{user.email}</td>
              <td className="px-6 py-3">{user.phone}</td>
              <td className="px-6 py-3">
                <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                  Active
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
