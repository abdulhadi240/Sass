'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Curve() {
  const [initialPath, setInitialPath] = useState('');
  const [targetPath, setTargetPath] = useState('');

  useEffect(() => {
    const initialPathVal = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`;
    const targetPathVal = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`;

    setInitialPath(initialPathVal);
    setTargetPath(targetPathVal);
  }, []);

  const curve = {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };

  if (!initialPath || !targetPath) {
    return null; // Return null or a loading indicator until paths are set
  }

  return (
    <svg className='absolute top-0 -left-[99px] w-[100px] h-[100%] fill-[#292929] stroke-none'>
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  );
}