import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faMoneyBillAlt,
  faPlusCircle,
  faSignOutAlt,
  faChartLine,
  faP,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";

const SIDE_LINKS = [
  {
    path: "",
    icon: faHome,
    label: "Home",
  },
  {
    path: "profile",

    icon: faUser,
    label: "Profile",
  },
  {
    path: "expenses",
    icon: faMoneyBillAlt,
    label: "Expenses",
  },
  {
    path: "add-expense",
    icon: faPlusCircle,
    label: "Add Expense",
  },
  {
    path: "reports",
    icon: faChartLine,
    label: "Reports",
  },
  {
    path: "logout",
    icon: faSignOutAlt,
    label: "Log Out",
  },
];
const Sidebar = () => {
  return (
    <div className="bg-gray-600 h-full sticky shadow-lg">
      <div className="flex items-center justify-center h-12 bg-gray-900">
        <span className="text-white text-lg font-semibold">Dashboard</span>
      </div>
      <nav className="mt-4">
        <ul>
          {SIDE_LINKS.map((link) => (
            <SidebarLink key={link.label} link={link} />
          ))}
          ;
        </ul>
      </nav>
    </div>
  );
};

function SidebarLink({ link }) {
  return (
    <li className="mb-2">
      <NavLink
        to={link.path}
        className={"flex items-center text-white hover:bg-gray-600 py-2 px-4"}
      >
        <FontAwesomeIcon icon={link.icon} className="w-5 h-5 mr-2" />
        {link.label}
      </NavLink>
    </li>
  );
}
export default Sidebar;
