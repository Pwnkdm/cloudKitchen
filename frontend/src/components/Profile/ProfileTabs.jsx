import React, { useState } from "react";
import {
  FaHome,
  FaClipboardList,
  FaCreditCard,
  FaUsers,
  FaFileInvoice,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import Profile from "./Profile";
import CommingSoon from "../Common/CommingSoon.jsx";

const ProfileTabs = () => {
  const [activeSection, setActiveSection] = useState("test-card-details");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Sidebar items
  const sections = [
    { id: "Profile", label: "Profile", icon: <FaUsers /> },
    { id: "orders", label: "Orders", icon: <FaClipboardList /> },
    // { id: "dashboard", label: "Dashboard", icon: <FaHome /> },
    // { id: "payments", label: "Payments", icon: <FaCreditCard /> },
    // { id: "invoices", label: "Invoices", icon: <FaFileInvoice /> },
  ];

  // Section content
  const renderSectionContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <div>Dashboard Content</div>;
      case "Profile":
        return (
          <div className="h-full overflow-auto">
            <Profile />
          </div>
        );
      case "orders":
        return <CommingSoon />;
      case "payments":
        return <div>Payments Content</div>;
      case "invoices":
        return <div>Invoices Content</div>;
      default:
        return <div>Test Card Details Content</div>;
    }
  };

  return (
    <div className="flex h-screen pt-[64px]">
      {/* Sidebar with toggle */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-gray-800 text-white flex flex-col transition-all duration-300`}
      >
        {/* Sidebar content */}
        <nav className="flex-1 px-4 py-2">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`flex items-center w-full px-6 py-3 mt-2 rounded-lg transition-all ${
                activeSection === section.id
                  ? "bg-blue-500"
                  : "hover:bg-gray-700"
              } ${isSidebarOpen ? "justify-start" : "justify-center"}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className={`${!isSidebarOpen ? "" : "mr-3"}`}>
                {section.icon}
              </span>
              {isSidebarOpen && <span>{section.label}</span>}
            </button>
          ))}
        </nav>

        {/* Toggle Button */}
        <button
          className="p-4 focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-1 overflow-auto">
        <section className="bg-white rounded-lg shadow">
          {renderSectionContent()}
        </section>
      </main>
    </div>
  );
};

export default ProfileTabs;
