import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  faHome,
  faUser,
  faMoneyBillAlt,
  faPlusCircle,
  faSignOutAlt,
  faChartLine,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

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
];

const SIDEBAR_BOTTOM_LINKS = [
  {
    path: "settings",
    icon: faCog,
    label: "Settings",
  },
  {
    path: "profile",
    icon: faUser,
    label: "Profile",
  },
];
export default function Sidebar() {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col h-screen">
      <div className="flex items-center gap-2 px-1 py-3">
        {/* <FcBullish fontSize={24} /> */}
        <span className="text-neutral-200 text-lg">Dashboard</span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {SIDE_LINKS.map((link) => (
          <SidebarLink key={link.path} link={link} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.path} link={link} />
        ))}
        <div className={classNames(linkClass, "cursor-pointer text-red-500")}>
          <span className="text-xl">
            <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5 mr-2" />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === "/home/" + link.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClass
      )}
    >
      <FontAwesomeIcon icon={link.icon} className="w-5 h-5 mr-2" />
      {link.label}
    </Link>
  );
}
