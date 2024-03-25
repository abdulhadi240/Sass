'use client'
import {LazyMotion, AnimatePresence ,domAnimation } from 'framer-motion';
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import Navbar from './Nav/Navbar';
import { usePathname } from 'next/navigation';
import Image from 'next/image'
export default function Index() {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  return (
    <div className=''>
    <div className='flex justify-between px-2 sm:px-10 '>
    <div className="logo mt-2">
      <svg width="50" height="51" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)" fill="black"><path d="M16.666 8.849c0 4.6 3.733 8.333 8.333 8.333h16.667a8.336 8.336 0 0 1-8.333-8.333m-.015-.016V.5H16.652v8.333h16.666Zm.016 33.347c0-4.599-3.734-8.332-8.334-8.332H8.334c4.6 0 8.333 3.733 8.333 8.333"/><path d="M16.682 42.167V50.5h16.666v-8.333H16.682Z"/><path d="M41.667 17.182a8.336 8.336 0 0 0-8.333 8.333V42.18c0-4.6 3.733-8.333 8.333-8.333m0-.029H50V17.152h-8.333v16.666Zm-33.333.031c4.6 0 8.333-3.734 8.333-8.334V8.85c0 4.6-3.733 8.333-8.333 8.333m-.001-.001H0v16.666h8.333V17.182Z"/></g><defs><clipPath id="a"><path fill="black" transform="translate(0 .5)" d="M0 0h50v50H0z"/></clipPath></defs></svg>
      </div>
      <div className={styles.main}>
        <div className={styles.header}>
          <div onClick={() => { setIsActive(!isActive) }} className={styles.button}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </div>
        </div>

      </div>
      <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">   {/* mode="wait"    Means it will take sometime to perform animation*/}
        {isActive && <Navbar />}
      </AnimatePresence>
      </LazyMotion>
    </div>
    </div>
    
  )

}