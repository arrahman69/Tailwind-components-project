import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navigationData = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 3,
    name: "Teams",
    path: "/teams",
  },
  {
    id: 4,
    name: "Settings",
    path: "/settings",
  },
  {
    id: 5,
    name: "Profile",
    path: "/profile",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const links = navigationData.map((route) => (
    <link key={route.id} route={route}></link>
  ));

  return (
    <div className="mx-10">
      <nav className="flex justify-between mx-5 mt-4">
        <span className="flex" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="md:hidden"></X>
          ) : (
            <Menu className="md:hidden"></Menu>
          )}

          {/* <ul className="">{links}</ul> */}
          <h3 className="ml-4">My Navbar</h3>
        </span>

        <ul className="flex md:hidden">{links}</ul>

        <ul className="md:flex hidden">
          {navigationData.map((route) => (
            <li className="mr-10 ">
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul>
        {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
             <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}

        <button>sign In</button>
      </nav>
      <ul className={` ${open ? "flex flex-col top-10 left-22" : "-top-50 left-22"}  absolute duration-1000 transition-all bg-gray-500 -top-50`}>
        {navigationData.map((route) => (
          <li className="lg:mr-18 hover:bg-gray-600 m-1 p-0.4">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
