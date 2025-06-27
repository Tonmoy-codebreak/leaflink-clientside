import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";

const navItems = [
  { to: "", label: "Statistics", exact: true },
  { to: "alltips", label: "All Tips" },
  { to: "mytips", label: "My Tips" },
  { to: "addtips", label: "Add Tips" },
  { to: "contributors", label: "Contributors" },
];

const DashBoardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-11/12 max-w-7xl mx-auto bg-gray-50 flex flex-col lg:flex-row">
      {/* Topbar for mobile and md (until lg) */}
      <header className="bg-white lg:hidden flex items-center justify-between p-4 border-b border-green-200">
        <h2 className="text-2xl font-bold text-green-700 font-logo">Dashboard</h2>
        <button
          aria-label="Toggle menu"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {sidebarOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`
          bg-white border-green-200 p-6 flex flex-col space-y-6
          lg:w-64 lg:border-r
          fixed top-0 left-0 h-full z-50
          lg:static lg:h-auto
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          w-64
        `}
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6 font-logo">Dashboard</h2>

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
              onClick={() => setSidebarOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
        />
      )}

      {/* Main content */}
      <main className="flex-1 p-6 lg:p-8 bg-white min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoardLayout;
