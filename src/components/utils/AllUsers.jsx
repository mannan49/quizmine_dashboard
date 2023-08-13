import React from "react";
import UsersTable from "./UsersTable";

const AllUsers = () => {
  return (
    <div className="bg-main px-2 lg:px-10 py-3 rounded-xl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-primary font-bold">All Users</h1>
        <p className="text-xl">117 total</p>
      </div>
      <UsersTable />
    </div>
  );
};

export default AllUsers;
