import React from "react";
import { NavLink, Outlet } from "react-router";

const navItems = [
  { to: "", label: "Statistics", exact: true },
  { to: "alltips", label: "All Tips" },
  { to: "mytips", label: "My Tips" },
  { to: "addtips", label: "Add Tips" },
  { to: "contributors", label: "Contributors" },
];

const DashBoardLayout = () => {
  return (
    <div className="flex min-h-screen w-10/12 mx-auto bg-gray-50">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-green-200 p-6 flex flex-col space-y-6">
        <h2 className="text-2xl font-bold text-green-700 mb-6 font-logo ">Dashboard</h2>

        <nav className="flex flex-col space-y-3">
          {navItems.map(({ to, label, exact }) => (
            <NavLink
              key={label}
              to={to}
              end={exact}
              className={({ isActive }) =>
                isActive
                  ? "bg-green-700 text-white rounded-md px-3 py-1 font-semibold"
                  : "text-gray-600 hover:text-green-600 hover:bg-green-100 rounded-md px-3 py-1"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoardLayout;
