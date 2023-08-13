import React from "react";

const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    lastLogin: "2023-08-10T15:30:00",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    lastLogin: "2023-08-09T10:45:00",
  },
  {
    id: 3,
    name: "Arslan Khalid",
    email: "arlsankhalid@gmail.com",
    role: "User",
    lastLogin: "2023-04-02T11:23:00",
  },
];

function formatDateTime(dateTimeString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return new Date(dateTimeString).toLocaleString(undefined, options);
}

function UsersTable() {
  return (
    <div className="bg-main lg:p-4 mt-2">
      <table className="min-w-full">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="lg:px-4 lg:py-2">Name</th>
            <th className="lg:px-4 lg:py-2">Email</th>
            <th className="lg:px-4 lg:py-2 hidden md:block">Role</th>
            <th className="lg:px-4 lg:py-2 ">Last Login</th>
            <th className="lg:px-4 lg:py-2 hidden md:block">Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id} className="border-b border-gray-300 text-center">
              <td className="text-sm lg:text-lg lg:px-4 lg:py-2">
                {user.name}
              </td>
              <td className="text-sm lg:px-4 lg:py-2">{user.email}</td>
              <td className="lg:px-4 lg:py-2 hidden md:block">{user.role}</td>
              <td className="text-sm lg:text-lg lg:px-4 lg:py-2">
                {formatDateTime(user.lastLogin)}
              </td>
              <td className="lg:px-4 lg:py-2 hidden md:block">
                <button className="bg-primary text-white px-6 py-1 rounded-full">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
