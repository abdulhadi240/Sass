import React from "react";
import Image from 'next/image'
import Link from "next/link";
const navItems = [
  {
    name : 'Home',
    link : '/'
  },
  {
    name : 'Product',
    link : '/product'
  },{
    name : 'Documentation',
    link : '/docs'
  },{
    name : 'About us',
    link : '/about'
  },
  ,{
    name : 'Contact us',
    link : '/contact'
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between mx-10 items-center mt-2">
      <div className="logo">
        <Image src={'/logo.png'} height={30} width={30} alt="logo"/>
      </div>
      <div className="navItems items-center">
        <div className="flex gap-6">
          {navItems.map((items,index)=>{
            return(
             <Link href={items.link}> <div 
              key={index} className="hover:underline">
                {items.name}
              </div></Link>
            )
          })}
        </div>
      </div>
      <div className="button">
        <button className="w-32 h-10 rounded-lg border-[1px]">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
