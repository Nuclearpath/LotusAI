import React from "react";
import AdminHeader from "../../components/AdminHeader";
function Dashboard() {
  return (
    <div>
      <AdminHeader></AdminHeader>
      <div className="w-full sm:px-12 px-3 sm:py-9 py-3">
        <div className="py-5 flex flex-col px-5 shadow-xl rounded-lg">
          <div className="font-Montserrat font-semibold text-custom-yellow text-xl ">
            Dashboard
          </div>
          <div className="font-Montserrat text-gray-500 ">
            View all stats here
          </div>
        </div>
        <div className="grid sm:grid-cols-4 grid-cols-2">
          <div className="w-full flex flex-col font-Montserrat">
            <div>Users Online</div>
            <div>108</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
