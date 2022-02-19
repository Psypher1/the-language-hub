import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Sidebar({ menu, metaData }) {
  const getInitialMenu = (menu) => menu.map((menuItem) => ({ ...menuItem }));
  const router = useRouter();
  const { asPath, pathname } = useRouter();

  // style of side menu items
  const menuStyle =
    "block hover:bg-sky-600 px-4 py-2 mb-2 transition duration-300 ease-in-out";

  // active style of side menu items
  const isActive = "bg-sky-900 font-semibold";

  return (
    <div className="min-h-scree">
      {/* map through the side menu items */}
      {menu.map((menuItem, index) => {
        // clean menu names with spaces
        const cleanedMenuItem = menuItem.replace(" ", "-");
        // simplify path  to run condition easier
        const path = `/${metaData.topic}/${cleanedMenuItem.toLowerCase()}`;

        return (
          <Link
            href={`/${metaData.topic}/${cleanedMenuItem.toLowerCase()}`}
            key={index}
          >
            <a
              className={`${menuStyle} ${
                path === router.asPath ? isActive : ""
              }`}
            >
              {menuItem}
            </a>
          </Link>
        );
      })}
    </div>
  );
}
