"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import ButtonLink from '../elements/ButtonLink';
import Image from 'next/image';

import logo from '../../../public/images/logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Resume Builder' },
    { href: '#', label: 'Contact' },
  ];

  return (
    <header className="bg-[#EFF6FF] shadow-sm sticky  w-full top-0 left-0 z-50 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="#" 
              
            >
              <Image src={logo} alt='Routes Accademy Logo' width={80} height={20}/>
            </Link>
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href='#' label='Login' variant='secondary' />
            <ButtonLink href='courses' label='See Courses' variant='primary' />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-3 text-gray-600 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#EFF6FF] ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
             <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex flex-col items-start px-2 space-y-2">
                    <ButtonLink href="#" label="Login" variant="secondary" className="w-full"/>
                    <ButtonLink href="courses" label="See Courses" variant="primary" className="w-full"/>
                </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

