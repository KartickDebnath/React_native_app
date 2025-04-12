'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Importing lucide icons
import logonew from '../../../public/ailogo.png'

function Header() {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to toggle mobile menu visibility

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className='flex p-4 items-center justify-between  shadow-sm relative' style={{backgroundColor:'#d9d9d9'}}>
      {/* Hamburger menu for mobile */}
      <button
        className='md:hidden text-primary absolute left-4' 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu visibility
      >
        {isMobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
      </button>

      {/* Logo */}
      <Image
        src={logonew}
        width={250}
        height={300}
        alt='logo'
        className='ml-5'
      />
      
      {/* Desktop Navigation */}
      <ul className='hidden md:flex gap-6'>
        <Link href='/dashboard'>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer
              ${path == '/dashboard' && 'text-primary font-bold'}`}
          >
            Dashboard
          </li>
        </Link>
        <Link href='/dashboard/questions'>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer
              ${path == '/dashboard/questions' && 'text-primary font-bold'}`}
          >
            Questions
          </li>
        </Link>
        <Link href='/dashboard/upgrade'>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path == '/dashboard/upgrade' && 'text-primary font-bold'}`}
          >
            Upgrade
          </li>
        </Link>
        <Link href='/dashboard/how'>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer
              ${path == '/dashboard/how' && 'text-primary font-bold'}`}
          >
            How it Works?
          </li>
        </Link>
      </ul>

      {/* User Button */}
      <UserButton />

      {/* Mobile Navigation - This menu is hidden by default and shown when the menu is toggled */}
      {isMobileMenuOpen && (
        <ul className='md:hidden flex flex-col gap-4 mt-4 absolute top-20 left-0 right-0 bg-secondary p-4 rounded-lg w-full'>
          <Link href='/dashboard'>
            <li
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path == '/dashboard' && 'text-primary font-bold'}`}
            >
              Dashboard
            </li>
          </Link>
          <Link href='/dashboard/questions'>
            <li
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path == '/dashboard/questions' && 'text-primary font-bold'}`}
            >
              Questions
            </li>
          </Link>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path == '/dashboard/upgrade' && 'text-primary font-bold'}`}
          >
            Upgrade
          </li>
          <Link href='/dashboard/how'>
            <li
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                ${path == '/dashboard/how' && 'text-primary font-bold'}`}
            >
              How it Works?
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default Header;
