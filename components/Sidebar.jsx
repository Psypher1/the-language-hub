import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Sidebar({ href, menu, metaData }) {
  const getInitialMenu = (menu) => menu.map((menuItem) => ({ ...menuItem }));
  const router = useRouter();
  const { asPath, pathname } = useRouter();
  console.log(router.asPath); // '/blog/xyz'
  // console.log(pathname); // '/blog/[slug]'

  // console.log(href);
  // active style of side menu items
  const menuStyle =
    "block hover:bg-sky-600 px-4 py-2 mb-2 transition duration-300 ease-in-out";
  const isActive = "bg-sky-900 font-semibold";

  return (
    <div className=" min-h-scree">
      {/* map through the side menu items */}
      {menu.map((menuItem, index) => {
        const path = `/${metaData.topic}/${menuItem.toLowerCase()}`;
        return (
          <Link
            href={`/${metaData.topic}/${menuItem.toLowerCase()}`}
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
