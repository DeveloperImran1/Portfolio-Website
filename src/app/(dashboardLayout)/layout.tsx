"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react"; // shadcn/lucide-react icon
import { Button } from "@/components/ui/button";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ===== Desktop Sidebar ===== */}
      <div className="hidden lg:block w-64 bg-white border-r border-gray-200 shadow-sm">
        <Sidebar />
      </div>

      {/* ===== Mobile / Tablet Sidebar Drawer ===== */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar Panel */}
        <div className="absolute left-0 top-0 w-64 h-full bg-white shadow-lg border-r border-gray-200 transform transition-transform duration-300 ease-in-out translate-x-0">
          <Sidebar />
        </div>
      </div>

      {/* ===== Main Content Area ===== */}
      <main className="flex-1 flex flex-col w-full overflow-auto">
        {/* Top Bar (Mobile / Tablet only) */}
        <div className="flex items-center justify-between bg-white px-4 py-3 border-b border-gray-200 lg:hidden sticky top-0 z-30 shadow-sm">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="text-gray-700"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
          <div className="w-8" /> {/* spacer */}
        </div>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 md:p-8">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
