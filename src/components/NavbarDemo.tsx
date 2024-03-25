"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./Navbar";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="flex justify-between  items-center text-center mx-6">
      <div className="logo">
      <svg width="50" height="51" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)" fill="black"><path d="M16.666 8.849c0 4.6 3.733 8.333 8.333 8.333h16.667a8.336 8.336 0 0 1-8.333-8.333m-.015-.016V.5H16.652v8.333h16.666Zm.016 33.347c0-4.599-3.734-8.332-8.334-8.332H8.334c4.6 0 8.333 3.733 8.333 8.333"/><path d="M16.682 42.167V50.5h16.666v-8.333H16.682Z"/><path d="M41.667 17.182a8.336 8.336 0 0 0-8.333 8.333V42.18c0-4.6 3.733-8.333 8.333-8.333m0-.029H50V17.152h-8.333v16.666Zm-33.333.031c4.6 0 8.333-3.734 8.333-8.334V8.85c0 4.6-3.733 8.333-8.333 8.333m-.001-.001H0v16.666h8.333V17.182Z"/></g><defs><clipPath id="a"><path fill="black" transform="translate(0 .5)" d="M0 0h50v50H0z"/></clipPath></defs></svg>
      </div>
      <Navbar className="" />
      <div className="get_started">
        <button className="w-auto h-auto p-3 tracking-tighter rounded-full text-black bg-[#ddff00]">Get Started</button>
      </div>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(" bg-transparent inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <Link href={'/'}><div>
      Home
      </div></Link>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Linkedin Optimization"
              href="/Linkedin_Optimization"
              src="/linkedin.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Professional Headshot"
              href="/headshot"
              src="/hero.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Resume Optimization"
              href="/resume"
              src="/resume.jpg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Post Creation"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Documentation">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/documentation">Docs</HoveredLink>
            <HoveredLink href="/individual">Api Keys</HoveredLink>
          </div>
        </MenuItem>
        <div>
          Contact
        </div>
      </Menu>
    </div>
  );
}
