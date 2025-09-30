import React from 'react';

const navigationData = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard"
  },
  {
    id: 2,
    name: "Projects",
    path: "/projects"
  },
  {
    id: 3,
    name: "Teams",
    path: "/teams"
  },
  {
    id: 4,
    name: "Settings",
    path: "/settings"
  },
  {
    id: 5,
    name: "Profile",
    path: "/profile"
  }
];


const NavBar = () => {
    return (
        <nav>

<li className='flex justify-end'>
    { navigationData.map(route=><link key={route.id}route= {route}></link>)}
</li>

            <ul className='flex justify-end'>
{
    navigationData.map(route => <li className='mr-10'>
        <a href={route.path}>{route.name}</a></li> )
}
            </ul>
            {/* <ul className='flex justify-end'>
                <li className='mr-10'><a href="/">Home</a></li>
             <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}
        </nav>
    );
};

export default NavBar;